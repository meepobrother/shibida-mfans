<?php

$sql = "DROP TABLE IF EXISTS ".tablename('shibida_mfans_paylog').";
CREATE TABLE ".tablename('shibida_mfans_paylog')." (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) unsigned NOT NULL DEFAULT '0',
  `fee` decimal(10,0) NOT NULL DEFAULT '0',
  `status` tinyint(2) unsigned NOT NULL DEFAULT '0',
  `type` varchar(32) NOT NULL DEFAULT '''''',
  `tid` varchar(64) NOT NULL DEFAULT '''''',
  `data` text NOT NULL,
  `create_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tid` (`tid`),
  KEY `uniacid` (`uniacid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
pdo_query($sql);

