<?php
global $_W, $_GPC;
// ini_set('display_errors', true);
// error_reporting(E_ALL);
$data = array(
    'status' => 0,
);
load()->app('common');
$isLogin = checkauth2();

if ($isLogin) {
    $data['status'] = 1;
} else {
    $data['status'] = 0;
}
$data['info'] = $_W['member'];

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/checkLogin.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));

function checkauth2()
{
    global $_W, $engine;
    load()->model('mc');
    load()->model('account');
    if (!empty($_W['member']) && (!empty($_W['member']['mobile']) || !empty($_W['member']['email']))) {
        return true;
    }
    if (!empty($_W['openid'])) {
        $fan = mc_fansinfo($_W['openid'], $_W['acid'], $_W['uniacid']);
        if (empty($fan) && $_W['account']['level'] == ACCOUNT_SERVICE_VERIFY) {
            $fan = mc_oauth_userinfo();
            if (!empty($fan['openid'])) {
                $fan = mc_fansinfo($fan['openid']);
            }
        }
        if (empty($fan['uid'])) {
            $setting = uni_setting($_W['uniacid'], array('passport'));
            if (!isset($setting['passport']) || empty($setting['passport']['focusreg'])) {
                $reg_members = mc_init_fans_info($_W['openid'], true);
                $fan['uid'] = $reg_members['uid'];
            }
        }
        if (_mc_login(array('uid' => safe_gpc_int($fan['uid'])))) {
            return true;
        }
    }
    return false;
}
