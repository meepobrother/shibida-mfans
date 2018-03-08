<?php
global $_W, $_GPC;

$uid = $_W['member']['uid'];
$mobile = $_W['member']['mobile'];
$list = array();

if (!empty($mobile)) {
    $list = pdo_getall('shibida_carfiles', array('father' => $uid));
}

die(json_encode($list));
