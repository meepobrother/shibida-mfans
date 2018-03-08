<?php
global $_W, $_GPC;

load()->model('user');
load()->model('card');
load()->func('tpl');

$notice_count = card_notice_stat();

$data = array();
$data['notice_count'] = $notice_count;
$data['member'] = $_W['member'];
$mycard = pdo_get('mc_card_members', array('uniacid' => $_W['uniacid'], 'uid' => $_W['member']['uid']));
if (empty($mycard)) {
    $mycard = array();
    $mycard['uniacid'] = $_W['uniacid'];
    $mycard['uid'] = $_W['member']['uid'];
    $mycard['openid'] = $_W['openid'];
    $mycard['cid'] = 1;
    $mycard['status'] = 1;
    $mycard['cardsn'] = $_W['member']['mobile'];
    $mycard['createtime'] = time();
    $mycard['nums'] = 0;
    $mycard['endtime'] = time() + 60 * 60 * 24 * 2 * 365;
    if (pdo_insert('mc_card_members', $mycard)) {
        $mycard['id'] = pdo_insertid();
    }
}
$data['mycard'] = $mycard;
$data['mycard']['createtime'] = date('Y-m-d', $data['mycard']['createtime']);
$data['mycard']['endtime'] = date('Y-m-d', $data['mycard']['endtime']);

load()->model('activity');
$coupons = we7_coupon_activity_coupon_owned();
$data['total'] = count($coupons);

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getcard.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));
