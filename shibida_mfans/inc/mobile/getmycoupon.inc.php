<?php
global $_W, $_GPC;
// ini_set('display_errors', true);
// error_reporting(E_ALL);
load()->model('activity');
$list = activity_coupon_owned();
die(json_encode($list));
