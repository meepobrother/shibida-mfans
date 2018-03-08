<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$money = floatval($input['money']);
$num = intval($input['num']);
$tid = random(12) . Date('YmdHis');

$data = array();
$data['uniacid'] = $_W['uniacid'];
$data['create_time'] = time();
$data['status'] = 0;
$data['data'] = serialize($input);
$data['tid'] = $tid;
$data['fee'] = $money;
$data['type'] = 'shibida.mfans.payxiche';
// 插入充值表
$re = array();
$re['status'] = -1;
if (pdo_insert('shibida_mfans_paylog', $data)) {
    $re['tid'] = $tid;
    $re['status'] = 1;
}

die(json_encode($re));
