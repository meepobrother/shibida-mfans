<?php
global $_W, $_GPC;

$uid = $_W['member']['uid'];
$mobile = $_W['member']['mobile'];
$list = array();

if (!empty($mobile)) {
    $list = pdo_getall('shibida_carfiles', array('mobile' => $mobile));
}

die(json_encode($list));
