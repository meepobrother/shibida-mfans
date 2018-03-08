<?php
global $_GPC,$_W;
load()->model('activity');
$list = activity_coupon_user_available();

die(json_encode($list));
