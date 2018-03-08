<?php
global $_W, $_GPC;

$tid = $_GPC['tid'];

if(empty($tid)){
    message('参数缺失');
}

$order = pdo_get('shibida_mfans_paylog', array('tid' => $tid));
$order['data'] = unserialize($order['data']);
if(empty($order)){
    message('订单有误');
}

$params = array();
$params['module'] = 'shibida_mfans';
$params['tid'] = $tid;
$params['fee'] = $order['fee'];
$params['ordersn'] = $tid;
$params['title'] = $order['data']['title'];

$this->pay($params);
