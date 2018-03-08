<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$credit = floatval($input['credit']);
load()->model('mc');
$data = array();
$re = mc_credit_update($_W['member']['uid'], 'credit1', '-'.$credit);
if (is_error($re)) {
    die(json_encode($re));
}
load()->model('activity');
$id = activity_goods_grant($_W['member']['uid'], $input['id']);

$data['re'] = $re;
$data['id'] = $id;
die(json_encode($data));
