<?php
global $_W, $_GPC;
$data = array(
    'status' => 0,
);

$input = $_GPC['__input'];
$mobile = $input['mobile'];
$password = $input['password'];

load()->model('mc');

$item = pdo_get('mc_members', array('mobile' => $mobile, 'uniacid' => $_W['uniacid']));

if (empty($item)) {
    $data['status'] = 1;
    $data['message'] = '会员不存在';
} else {
    // 检查密码是否正确
    $code = md5($password . $item['salt'] . $_W['config']['setting']['authkey']);
    if ($code === $item['password']) {
        $user = array();
        $user['uid'] = $item['uid'];
        $user['mobile'] = $mobile;
        $data['isLogin'] = _mc_login($user);
        $data['uid'] = $item['uid'];
        $data['data'] = $user;
        $data['member'] = $_W['member'];
    } else {
        $data['status'] = 1;
        $data['message'] = '密码错误';
        $data['info'] = $item;
    }
}

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/doLogin.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));
