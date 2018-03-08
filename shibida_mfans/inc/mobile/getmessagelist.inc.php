<?php
global $_W, $_GPC;
$list = array();
$list = pdo_getall('mc_card_notices_unread', array('uid'=>$_W['member']['uid']));

if (empty($list)) {
    $list = array();
} else {
    foreach ($list as &$li) {
        $msg = pdo_get('mc_card_notices', array('id' => $li['notice_id']));
        $li['addtime'] = date('m-d H', $msg['addtime']);
        $li['title'] = $msg['title'];
        $li['thumb'] = tomedia($msg['thumb']);
        $li['content'] = $msg['content'];
    }
    unset($li);
}
die(json_encode($list));
