<?php
global $_W, $_GPC;

$id = intval($_GPC['did']);
$item = pdo_get('mc_card_notices', array('id' => $id));
die(json_encode($item));
