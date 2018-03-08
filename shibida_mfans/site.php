<?php
/**
 * 汽修会员端模块微站定义
 *
 * @author imeepos
 * @url http://bbs.we7.cc
 */
defined('IN_IA') or exit('Access Denied');
define("DEBUG", true);
// ini_set('display_errors', true);
// error_reporting(E_ALL);
include "model/activity.mod.php";

class Shibida_mfansModuleSite extends WeModuleSite
{
    private function checkMobileDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createMobileUrl($do);
            header("Location:" . $url);
            exit();
        }
    }
    public function doMobileCar()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('car');
        include $this->template('index');
    }
    public function doMobileShare()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('share');
        include $this->template('index');
    }
    public function doMobileCarnum()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('carnum');
        include $this->template('index');
    }
    public function doMobileCaradd()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('caradd');
        include $this->template('index');
    }
    public function doMobileXiche()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('xiche');
        include $this->template('index');
    }
    public function doMobileCoupon()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('coupon');
        include $this->template('index');
    }
    public function doMobileMessage()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('message');
        include $this->template('index');
    }
    public function doMobileHome()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('home');
        include $this->template('index');
    }
    public function doMobileMyinfo()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('myinfo');
        include $this->template('index');
    }
    public function doMobileLogin()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('login');
        include $this->template('index');
    }
    public function doMobileRegister()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('register');
        include $this->template('index');
    }
    public function doMobileForget()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('forget');
        include $this->template('index');
    }
    public function doMobileCard()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('card');
        include $this->template('index');
    }
    public function doMobileQrcodepay()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('qrcodepay');
        include $this->template('index');
    }
    public function doMobileQrcodexiche()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('qrcodexiche');
        include $this->template('index');
    }
    public function doMobileMessagedetail()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('messagedetail');
        include $this->template('index');
    }
    public function doMobileRecharge()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('recharge');
        include $this->template('index');
    }

    public function payResult($params = array())
    {
        global $_W, $_GPC;
        $tid = $params['tid'];
        if ($params['result'] == 'success' && $params['from'] == 'notify') {
            $order = pdo_get('shibida_mfans_paylog', array('tid' => $tid));
            if (!empty($order)) {
                $order['data'] = unserialize($order['data']);
                if ($order['type'] === 'shibida.mfans.payxiche') {
                    if (pdo_update('shibida_mfans_paylog', array('status' => 1), array('id' => $order['id']))) {
                        // 增加开卡次数
                        $card = pdo_get('mc_card_members', array('uid' => $_W['member']['uid']));
                        pdo_update('mc_card_members', array('nums' => $card['nums'] + $order['data']['num']));
                    }
                }
            }
        }

        if ($params['result'] == 'success' && $params['from'] == 'return') {
            message('支付成功！', $this->createMobileUrl('card', array('m' => 'shibida_mfans')), 'success');
        }
    }
    public function doWebHome()
    {
        //这个操作被定义用来呈现 微站首页导航图标
    }

}
