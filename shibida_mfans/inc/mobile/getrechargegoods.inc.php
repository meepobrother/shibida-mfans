<?php
global $_W, $_GPC;
$sql = "SELECT * FROM " . tablename('activity_exchange') . " WHERE uniacid=:uniacid AND starttime<=:starttime AND endtime>=:endtime AND status=:status";
$params = array();
$params[':uniacid'] = $_W['uniacid'];
$params[':starttime'] = time();
$params[':endtime'] = time();
$params[':status'] = 1;

$list = pdo_fetchall($sql, $params);
foreach ($list as &$li) {
    $li['description'] = htmlspecialchars_decode($li['description']);
}
unset($li);
die(json_encode($list));
