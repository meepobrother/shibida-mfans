<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$mobile = $input['mobile'];
$realname = $input['realname'];

$data = array();
$data['status'] = -1;
if(pdo_update('mc_members', array('mobile' => $mobile, 'realname' => $realname), array('uid' => $_W['member']['uid']))){
    $data['status'] = 1;
}
die(json_encode($data));
