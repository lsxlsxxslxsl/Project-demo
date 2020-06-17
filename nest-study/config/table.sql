CREATE TABLE `admin_user` (
  `user_id` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `account_name` varchar(24) NOT NULL COMMENT '用户账号',
  `real_name` varchar(20) NOT NULL COMMENT '真实姓名',
  `passwd` char(32) NOT NULL COMMENT '密码',
  `passwd_salt` char(6) NOT NULL COMMENT '密码盐',
  `mobile` varchar(15) NOT NULL DEFAULT '0' COMMENT '手机号码',
  `role` tinyint(4) NOT NULL DEFAULT '3' COMMENT '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
  `user_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态：0-失效|1-有效|2-删除',
  `create_by` smallint(6) NOT NULL COMMENT '创建人ID',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` smallint(6) NOT NULL DEFAULT '0' COMMENT '修改人ID',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`user_id`),
  KEY `idx_m` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='后台用户表';

CREATE TABLE `commodity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `ccolumn_id` smallint(6) NOT NULL COMMENT '商品_栏目ID',
  `commodity_name` varchar(10) NOT NULL COMMENT '商品_名称',
  `commodity_desc` varchar(20) NOT NULL COMMENT '商品_介绍',
  `market_price` decimal(7,2) NOT NULL DEFAULT '0.00' COMMENT '市场价',
  `sale_money` decimal(7,2) NOT NULL DEFAULT '0.00' COMMENT '销售价',
  `c_by` varchar(24) NOT NULL COMMENT '创建人',
  `c_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `u_by` varchar(24) NOT NULL DEFAULT '0' COMMENT '修改人',
  `u_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `idx_ccid` (`ccolumn_id`),
  KEY `idx_cn` (`commodity_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';
