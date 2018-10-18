/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100125
 Source Host           : localhost:3306
 Source Schema         : carinventory

 Target Server Type    : MySQL
 Target Server Version : 100125
 File Encoding         : 65001

 Date: 18/10/2018 15:41:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for manufacturer
-- ----------------------------
DROP TABLE IF EXISTS `manufacturer`;
CREATE TABLE `manufacturer`  (
  `manufacturerid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `added_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`manufacturerid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of manufacturer
-- ----------------------------
INSERT INTO `manufacturer` VALUES (1, 'MARUTI', '2018-10-18 14:33:18', '2018-10-18 14:33:18');
INSERT INTO `manufacturer` VALUES (2, 'HONDA', '2018-10-18 14:33:25', '2018-10-18 14:33:25');
INSERT INTO `manufacturer` VALUES (3, 'TATA', '2018-10-18 14:33:37', '2018-10-18 14:33:37');
INSERT INTO `manufacturer` VALUES (4, 'TATA2', '2018-10-18 15:22:08', '2018-10-18 15:22:08');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `modelid` int(10) NOT NULL AUTO_INCREMENT,
  `manufacturer_id` int(10) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `year` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `registration_number` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `note` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `count` int(10) NULL DEFAULT NULL,
  `image_url_1` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `image_url_2` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `added_date` datetime(0) NULL DEFAULT NULL,
  `updated_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`modelid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 0, '', '', '', '', '', 0, '_1539853676.', '_1539853676.', '2018-10-18 14:37:56', '2018-10-18 14:37:56');
INSERT INTO `model` VALUES (2, 1, 'Swift', 'RED', '2017', 'jk', '', 0, '_1539854654.', '_1539854654.', '2018-10-18 14:54:14', '2018-10-18 15:08:09');
INSERT INTO `model` VALUES (3, 1, 'Swift', 'RED', '2017', 'jk', '', 0, '', '', '2018-10-18 14:56:02', '2018-10-18 15:12:21');
INSERT INTO `model` VALUES (4, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:56:36', '2018-10-18 14:56:36');
INSERT INTO `model` VALUES (5, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:56:40', '2018-10-18 14:56:40');
INSERT INTO `model` VALUES (6, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:57:14', '2018-10-18 14:57:14');
INSERT INTO `model` VALUES (7, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:57:20', '2018-10-18 14:57:20');
INSERT INTO `model` VALUES (8, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:57:34', '2018-10-18 14:57:34');
INSERT INTO `model` VALUES (9, 1, 'Swift', 'RED', '2017', 'jk', '', 2, '', '', '2018-10-18 14:58:10', '2018-10-18 14:58:10');
INSERT INTO `model` VALUES (10, 3, 'TATA NEXA', 'RED', '2015', '5768', '', 3, '', '', '2018-10-18 15:02:06', '2018-10-18 15:02:06');
INSERT INTO `model` VALUES (11, 3, 'TATA NANO', 'Yellow', '2015', '324', '', 6, 'st_09302018_110927_download_1539855921.jpg', '', '2018-10-18 15:15:21', '2018-10-18 15:15:21');
INSERT INTO `model` VALUES (12, 4, 'TATA NANO2', 'Red', 'jhsd', 'sdf', 'sd', 0, '', '', '2018-10-18 15:22:41', '2018-10-18 15:22:41');
INSERT INTO `model` VALUES (13, 2, 'i20', 'red', '2018', '67', '', 2, '', '', '2018-10-18 15:24:07', '2018-10-18 15:24:07');

SET FOREIGN_KEY_CHECKS = 1;
