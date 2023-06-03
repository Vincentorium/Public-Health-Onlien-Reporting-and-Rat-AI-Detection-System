-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2023 at 07:03 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

CREATE TABLE `camera` (
  `id` int(10) NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `name` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `camera`
--

INSERT INTO `camera` (`id`, `latitude`, `longitude`, `name`) VALUES
(2, 22.307410898701157, 114.1693639755249, 'Saigon Street #1'),
(3, 22.30756599075141, 114.16891738772395, 'Battery Street #2'),
(4, 22.308657833910605, 114.16968986392024, 'Kansu Street#1'),
(5, 22.30872235164833, 114.16920706629756, 'Battery Street #1'),
(6, 22.30853748343555, 114.17057096958162, 'Kansu Street#2'),
(7, 22.30840968848768, 114.17095988988878, 'Kansu Street#3');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `latitude` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `longitude` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `info` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mail`
--

CREATE TABLE `mail` (
  `id` int(11) NOT NULL,
  `reportId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `content` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `isRead` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mail`
--

INSERT INTO `mail` (`id`, `reportId`, `userId`, `content`, `timestamp`, `isRead`) VALUES
(220830, 1, 5, 'content of Please follow up this case  1', '2023-04-17 17:38:53', 1),
(220831, 3, 5, 'content of Please follow up this case  1', '2023-04-18 17:38:53', 1),
(220837, 1, 2, 't1t2', '2023-04-18 17:44:29', 0),
(220838, 1, 2, 'test', '2023-04-18 17:45:28', 0),
(220839, 1, 2, 't1t2', '2023-04-18 17:46:20', 0),
(220840, 6, 2, 't1t2', '2023-04-18 17:46:20', 0),
(220841, 7, 2, 't1t2', '2023-04-18 17:46:20', 0),
(220842, 1, 2, 'fff', '2023-04-18 17:47:43', 0),
(220843, 6, 2, 'fff', '2023-04-18 17:47:43', 0),
(220844, 7, 2, 'fff', '2023-04-18 17:47:43', 0),
(220845, 1, 2, 'taaaaa', '2023-04-18 17:50:16', 0),
(220846, 6, 2, 'taaaaa', '2023-04-18 17:50:16', 0),
(220847, 7, 2, 'taaaaa', '2023-04-18 17:50:16', 0),
(220848, 1, 2, 'rrrrrrrr', '2023-04-18 17:54:03', 0),
(220849, 6, 2, 'rrrrrrrr', '2023-04-18 17:54:03', 0),
(220850, 7, 2, 'rrrrrrrr', '2023-04-18 17:54:03', 0),
(220851, 1, 1, 'test by operator', '2023-04-19 05:00:57', 0),
(220852, 3, 2, 'test test2222', '2023-04-19 06:25:36', 0),
(220853, 3, 2, '', '2023-04-19 06:25:47', 0),
(220854, 3, 2, 'tettet', '2023-04-19 06:26:35', 0),
(220855, 1, 2, 'aaaa111', '2023-04-19 06:26:54', 0),
(220856, 1, 2, 'congrate solved', '2023-04-19 06:29:06', 1),
(220857, 6, 2, 'congrate solved', '2023-04-19 06:29:06', 0),
(220858, 7, 2, 'congrate solved', '2023-04-19 06:29:06', 0),
(220859, 1, 2, 'test', '2023-04-19 06:44:15', 0),
(220860, 1, 2, 'test ', '2023-04-19 06:49:17', 0),
(220861, 3, 9, 'text from aristotle', '2023-04-19 07:06:41', 0),
(220862, 1, 2, 'haaa', '2023-04-19 10:06:25', 0),
(220863, 6, 2, 'haaa', '2023-04-19 10:06:25', 0),
(220864, 7, 2, 'haaa', '2023-04-19 10:06:25', 0),
(220865, 3, 2, 'test title', '2023-04-19 11:18:53', 0),
(220866, 1, 2, 'tes multi mail without title', '2023-04-19 11:32:51', 0),
(220867, 7, 2, 'tes multi mail without title', '2023-04-19 11:32:51', 0),
(220868, 3, 2, 'tttt', '2023-04-19 13:10:01', 0),
(220869, 1, 2, 'test tst succful', '2023-04-20 12:26:13', 0),
(220870, 6, 2, 'test tst succful', '2023-04-20 12:26:13', 0),
(220871, 7, 2, 'test tst succful', '2023-04-20 12:26:13', 0),
(220872, 3, 2, '123', '2023-04-23 07:01:38', 0),
(220873, 3, 2, 'werwer', '2023-04-23 07:03:34', 0),
(220874, 1, 7, 'ttttttt', '2023-04-23 07:10:25', 0),
(220875, 1, 5, 'eeee', '2023-04-23 07:21:04', 0),
(220876, 1, 5, 'e222eee', '2023-04-23 07:21:30', 0),
(220877, 3, 6, '232', '2023-04-23 07:28:29', 0),
(220878, 3, 6, '232', '2023-04-23 07:36:03', 0),
(220879, 3, 6, '232', '2023-04-23 07:54:36', 0),
(220880, 3, 6, '232', '2023-04-23 07:54:50', 1),
(220881, 3, 6, '2232', '2023-04-23 07:55:10', 0),
(220882, 3, 6, '22232', '2023-04-23 07:55:46', 1),
(220883, 3, 6, '222232', '2023-04-23 07:56:07', 1),
(220884, 3, 6, '222232', '2023-04-23 07:56:26', 1),
(220885, 3, 2, 'test', '2023-04-23 14:34:09', 0),
(220888, 3, 2, '', '2023-04-25 04:50:17', 0),
(220889, 3, 2, '', '2023-04-25 04:51:03', 0),
(220890, 3, 2, '', '2023-04-25 04:54:21', 0);

-- --------------------------------------------------------

--
-- Table structure for table `mailimage`
--

CREATE TABLE `mailimage` (
  `id` int(11) NOT NULL,
  `mailId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mailimage`
--

INSERT INTO `mailimage` (`id`, `mailId`, `name`) VALUES
(99519, 220838, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99520, 220845, 'photo-1531263348817-2a52ea675d96.jfif'),
(99521, 220845, 'photo-1531263348817-2a52ea675d96.jfif'),
(99522, 220845, 'photo-1531263348817-2a52ea675d96.jfif'),
(99523, 220846, 'moon-4974842.jpg'),
(99524, 220846, 'moon-4974842.jpg'),
(99525, 220846, 'moon-4974842.jpg'),
(99526, 220847, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99527, 220847, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99528, 220847, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99529, 220848, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99530, 220848, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99531, 220848, '44ab00ff8e50579ca1417a554e47ca4f.jpg'),
(99532, 220849, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99533, 220849, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99534, 220849, '44ab00ff8e50579ca1417a554e47ca4f.jpg'),
(99535, 220850, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99536, 220850, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99537, 220850, '44ab00ff8e50579ca1417a554e47ca4f.jpg'),
(99538, 220853, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99539, 220854, 'federico-faccipieri-_hkZ_8cvlWk-unsplash.jpg'),
(99540, 220855, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99541, 220856, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99542, 220857, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99543, 220858, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99544, 220862, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99545, 220862, 'ocean-dark-night-moon-4k-1t.jpg'),
(99546, 220863, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99547, 220863, 'ocean-dark-night-moon-4k-1t.jpg'),
(99548, 220864, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99549, 220864, 'ocean-dark-night-moon-4k-1t.jpg'),
(99550, 220865, 'gabriel-tovar-Alg_u792UQw-unsplash.jpg'),
(99551, 220868, 'photo-1531263348817-2a52ea675d96.jfif'),
(99552, 220869, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99553, 220870, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99554, 220871, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99555, 220888, '527075_a1n86q_0.png'),
(99556, 220888, '4546488-moon-landscape-red-moon-nature.jpg'),
(99557, 220889, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(99558, 220889, '4546488-moon-landscape-red-moon-nature.jpg'),
(99559, 220889, '13-144-503-01.jpg'),
(99560, 220889, 'download (3).png'),
(99561, 220890, 'm2hCiLS7DGrqR4ltsQLazHAgVgGZ6mhIj-6-IMUEX2o.webp'),
(99562, 220890, '13-144-503-01.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `mousecountingrecord`
--

CREATE TABLE `mousecountingrecord` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `timeStart` int(11) NOT NULL,
  `timeEnd` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `cameraID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mousecountingrecord`
--

INSERT INTO `mousecountingrecord` (`id`, `date`, `timeStart`, `timeEnd`, `count`, `cameraID`) VALUES
(351, '2023-04-25', 0, 2, 3, 1),
(352, '2023-04-25', 2, 4, 24, 1),
(353, '2023-04-25', 4, 6, 24, 1),
(354, '2023-04-25', 6, 8, 3, 1),
(355, '2023-04-25', 8, 10, 26, 1),
(356, '2023-04-25', 10, 12, 30, 1),
(357, '2023-04-25', 12, 14, 7, 1),
(358, '2023-04-25', 14, 16, 13, 1),
(359, '2023-04-25', 16, 18, 1, 1),
(360, '2023-04-25', 18, 20, 8, 1),
(361, '2023-04-25', 20, 22, 8, 1),
(362, '2023-04-25', 22, 24, 13, 1),
(363, '2023-04-25', 0, 2, 7, 2),
(364, '2023-04-25', 2, 4, 22, 2),
(365, '2023-04-25', 4, 6, 15, 2),
(366, '2023-04-25', 6, 8, 7, 2),
(367, '2023-04-25', 8, 10, 3, 2),
(368, '2023-04-25', 10, 12, 14, 2),
(369, '2023-04-25', 12, 14, 31, 2),
(370, '2023-04-25', 14, 16, 7, 2),
(371, '2023-04-25', 16, 18, 16, 2),
(372, '2023-04-25', 18, 20, 28, 2),
(373, '2023-04-25', 20, 22, 24, 2),
(374, '2023-04-25', 22, 24, 12, 2),
(375, '2023-04-25', 0, 2, 18, 3),
(376, '2023-04-25', 2, 4, 31, 3),
(377, '2023-04-25', 4, 6, 24, 3),
(378, '2023-04-25', 6, 8, 18, 3),
(379, '2023-04-25', 8, 10, 26, 3),
(380, '2023-04-25', 10, 12, 22, 3),
(381, '2023-04-25', 12, 14, 21, 3),
(382, '2023-04-25', 14, 16, 30, 3),
(383, '2023-04-25', 16, 18, 26, 3),
(384, '2023-04-25', 18, 20, 7, 3),
(385, '2023-04-25', 20, 22, 25, 3),
(386, '2023-04-25', 22, 24, 20, 3),
(387, '2023-04-25', 0, 2, 1, 4),
(388, '2023-04-25', 2, 4, 24, 4),
(389, '2023-04-25', 4, 6, 23, 4),
(390, '2023-04-25', 6, 8, 1, 4),
(391, '2023-04-25', 8, 10, 29, 4),
(392, '2023-04-25', 10, 12, 5, 4),
(393, '2023-04-25', 12, 14, 6, 4),
(394, '2023-04-25', 14, 16, 25, 4),
(395, '2023-04-25', 16, 18, 22, 4),
(396, '2023-04-25', 18, 20, 18, 4),
(397, '2023-04-25', 20, 22, 3, 4),
(398, '2023-04-25', 22, 24, 24, 4),
(399, '2023-04-25', 0, 2, 5, 5),
(400, '2023-04-25', 2, 4, 26, 5),
(401, '2023-04-25', 4, 6, 18, 5),
(402, '2023-04-25', 6, 8, 5, 5),
(403, '2023-04-25', 8, 10, 2, 5),
(404, '2023-04-25', 10, 12, 24, 5),
(405, '2023-04-25', 12, 14, 8, 5),
(406, '2023-04-25', 14, 16, 24, 5),
(407, '2023-04-25', 16, 18, 11, 5),
(408, '2023-04-25', 18, 20, 17, 5),
(409, '2023-04-25', 20, 22, 13, 5),
(410, '2023-04-25', 22, 24, 14, 5),
(411, '2023-04-25', 0, 2, 1, 6),
(412, '2023-04-25', 2, 4, 6, 6),
(413, '2023-04-25', 4, 6, 5, 6),
(414, '2023-04-25', 6, 8, 1, 6),
(415, '2023-04-25', 8, 10, 15, 6),
(416, '2023-04-25', 10, 12, 16, 6),
(417, '2023-04-25', 12, 14, 7, 6),
(418, '2023-04-25', 14, 16, 2, 6),
(419, '2023-04-25', 16, 18, 18, 6),
(420, '2023-04-25', 18, 20, 11, 6),
(421, '2023-04-25', 20, 22, 1, 6),
(422, '2023-04-25', 22, 24, 22, 6),
(423, '2023-04-25', 0, 2, 23, 7),
(424, '2023-04-25', 2, 4, 7, 7),
(425, '2023-04-25', 4, 6, 27, 7),
(426, '2023-04-25', 6, 8, 23, 7),
(427, '2023-04-25', 8, 10, 4, 7),
(428, '2023-04-25', 10, 12, 10, 7),
(429, '2023-04-25', 12, 14, 6, 7),
(430, '2023-04-25', 14, 16, 27, 7),
(431, '2023-04-25', 16, 18, 13, 7),
(432, '2023-04-25', 18, 20, 13, 7),
(433, '2023-04-25', 20, 22, 12, 7),
(434, '2023-04-25', 22, 24, 27, 7),
(435, '2023-04-24', 0, 2, 26, 1),
(436, '2023-04-24', 2, 4, 1, 1),
(437, '2023-04-24', 4, 6, 3, 1),
(438, '2023-04-24', 6, 8, 22, 1),
(439, '2023-04-24', 8, 10, 11, 1),
(440, '2023-04-24', 10, 12, 19, 1),
(441, '2023-04-24', 12, 14, 25, 1),
(442, '2023-04-24', 14, 16, 16, 1),
(443, '2023-04-24', 16, 18, 25, 1),
(444, '2023-04-24', 18, 20, 17, 1),
(445, '2023-04-24', 20, 22, 14, 1),
(446, '2023-04-24', 22, 24, 14, 1),
(447, '2023-04-24', 0, 2, 30, 2),
(448, '2023-04-24', 2, 4, 11, 2),
(449, '2023-04-24', 4, 6, 24, 2),
(450, '2023-04-24', 6, 8, 24, 2),
(451, '2023-04-24', 8, 10, 18, 2),
(452, '2023-04-24', 10, 12, 29, 2),
(453, '2023-04-24', 12, 14, 23, 2),
(454, '2023-04-24', 14, 16, 2, 2),
(455, '2023-04-24', 16, 18, 21, 2),
(456, '2023-04-24', 18, 20, 12, 2),
(457, '2023-04-24', 20, 22, 29, 2),
(458, '2023-04-24', 22, 24, 24, 2),
(459, '2023-04-24', 0, 2, 7, 3),
(460, '2023-04-24', 2, 4, 13, 3),
(461, '2023-04-24', 4, 6, 23, 3),
(462, '2023-04-24', 6, 8, 29, 3),
(463, '2023-04-24', 8, 10, 25, 3),
(464, '2023-04-24', 10, 12, 21, 3),
(465, '2023-04-24', 12, 14, 16, 3),
(466, '2023-04-24', 14, 16, 16, 3),
(467, '2023-04-24', 16, 18, 15, 3),
(468, '2023-04-24', 18, 20, 22, 3),
(469, '2023-04-24', 20, 22, 14, 3),
(470, '2023-04-24', 22, 24, 22, 3),
(471, '2023-04-24', 0, 2, 23, 4),
(472, '2023-04-24', 2, 4, 10, 4),
(473, '2023-04-24', 4, 6, 29, 4),
(474, '2023-04-24', 6, 8, 9, 4),
(475, '2023-04-24', 8, 10, 5, 4),
(476, '2023-04-24', 10, 12, 2, 4),
(477, '2023-04-24', 12, 14, 29, 4),
(478, '2023-04-24', 14, 16, 17, 4),
(479, '2023-04-24', 16, 18, 22, 4),
(480, '2023-04-24', 18, 20, 27, 4),
(481, '2023-04-24', 20, 22, 21, 4),
(482, '2023-04-24', 22, 24, 28, 4),
(483, '2023-04-24', 0, 2, 21, 5),
(484, '2023-04-24', 2, 4, 2, 5),
(485, '2023-04-24', 4, 6, 1, 5),
(486, '2023-04-24', 6, 8, 2, 5),
(487, '2023-04-24', 8, 10, 2, 5),
(488, '2023-04-24', 10, 12, 25, 5),
(489, '2023-04-24', 12, 14, 16, 5),
(490, '2023-04-24', 14, 16, 23, 5),
(491, '2023-04-24', 16, 18, 31, 5),
(492, '2023-04-24', 18, 20, 13, 5),
(493, '2023-04-24', 20, 22, 18, 5),
(494, '2023-04-24', 22, 24, 4, 5),
(495, '2023-04-24', 0, 2, 15, 6),
(496, '2023-04-24', 2, 4, 25, 6),
(497, '2023-04-24', 4, 6, 14, 6),
(498, '2023-04-24', 6, 8, 9, 6),
(499, '2023-04-24', 8, 10, 27, 6),
(500, '2023-04-24', 10, 12, 21, 6),
(501, '2023-04-24', 12, 14, 25, 6),
(502, '2023-04-24', 14, 16, 4, 6),
(503, '2023-04-24', 16, 18, 3, 6),
(504, '2023-04-24', 18, 20, 21, 6),
(505, '2023-04-24', 20, 22, 6, 6),
(506, '2023-04-24', 22, 24, 25, 6),
(507, '2023-04-24', 0, 2, 12, 7),
(508, '2023-04-24', 2, 4, 9, 7),
(509, '2023-04-24', 4, 6, 12, 7),
(510, '2023-04-24', 6, 8, 12, 7),
(511, '2023-04-24', 8, 10, 2, 7),
(512, '2023-04-24', 10, 12, 16, 7),
(513, '2023-04-24', 12, 14, 26, 7),
(514, '2023-04-24', 14, 16, 27, 7),
(515, '2023-04-24', 16, 18, 25, 7),
(516, '2023-04-24', 18, 20, 9, 7),
(517, '2023-04-24', 20, 22, 1, 7),
(518, '2023-04-24', 22, 24, 10, 7);

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp(),
  `type` tinytext NOT NULL,
  `title` varchar(50) NOT NULL,
  `descr` tinytext NOT NULL,
  `date` date NOT NULL,
  `address` tinytext NOT NULL,
  `street` tinytext DEFAULT NULL,
  `latitude` decimal(20,0) NOT NULL,
  `longitude` decimal(20,0) NOT NULL,
  `dept` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id`, `userId`, `timestamp`, `type`, `title`, `descr`, `date`, `address`, `street`, `latitude`, `longitude`, `dept`) VALUES
(1, 5, '2023-04-19 15:22:14', 'Air Pollution', '裝修完就將啲廢料丟喺山坡，搞到成個垃圾崗咁！', '窗外山坡的垃圾近日愈積愈多，懷疑有裝修承辦商為減省開支，22\n將建築廢料隨便丟棄。', '2023-04-12', '3 Ashley Road, Tsim Sha Tsui', 'Ashley Road', '22', '114', 'Police Force'),
(3, 6, '2023-04-19 13:12:46', 'Pest Control', 'Please control mice in our workplace', 'ats and mice live wherever there are hiding places and easy access to food. You may notice rodents like these when they run from one place to another. However, rodents are secretive and are active at night, so you may need to look out for other signs.', '2023-04-15', '45-53 Austin Road, Yau Tsim ', 'Haiphong Road', '6', '7', 'Evir. Prot. Dept.'),
(6, 7, '2023-04-19 14:28:26', 'Pest Control', 'Help us with the renovation noise.', '裝修廢料點處理？裝修廢料點處理？裝修廢料點處理？', '2023-04-27', '4 Ashley Road, Tsim Sha Tsui', 'Ashley Road', '1', '2', 'Evir. Prot. Dept.'),
(7, 8, '2023-04-19 14:28:26', 'Noise Pollution', '裝修廢料點處理？', 'Please help us with the renovation noise.', '2023-04-27', '6 Ashley Road, Tsim Sha Tsui', 'Ashley Road', '0', '0', 'Housing Authority'),
(9, 8, '2023-03-27 10:20:44', 'Waste Pollution', 'follow handle this waste Pollution 1', 'content of follow handle this waste Pollution 1.....', '2023-03-29', '7,Ashley Road, Tsim Sha Tsui', 'Ashley Road', '123', '123', 'Evir. Prot. Dept.'),
(10, 7, '2023-04-25 00:09:15', 'Waste Pollution', '12312', '312313123', '2023-02-02', 'Ashley Road', 'Ashley Road', '0', '0', NULL),
(11, 7, '2023-04-25 00:09:40', 'Water Pollution', '12312', '312313123', '2023-04-27', 'Ashley Road', 'Ashley Road', '2', '2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reportimage`
--

CREATE TABLE `reportimage` (
  `id` int(11) NOT NULL,
  `reportId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reportimage`
--

INSERT INTO `reportimage` (`id`, `reportId`, `name`) VALUES
(1, 1, '643aa60db395a..jpeg'),
(2, 1, 'rep1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reportstatusimage`
--

CREATE TABLE `reportstatusimage` (
  `id` int(11) NOT NULL,
  `reportStatusId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reportstatusimage`
--

INSERT INTO `reportstatusimage` (`id`, `reportStatusId`, `name`) VALUES
(87, 833, '643aa60db395a..jpeg'),
(88, 897, '527075_a1n86q_0.png'),
(89, 898, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(90, 899, '527075_a1n86q_0.png'),
(91, 899, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(92, 929, '4546488-moon-landscape-red-moon-nature.jpg'),
(93, 929, 'download (5).png'),
(94, 929, '13-144-503-01 (1).jpg'),
(95, 929, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(96, 930, '4546488-moon-landscape-red-moon-nature.jpg'),
(97, 930, 'jesse-adair--TB5K8VZ3hw-unsplash.jpg'),
(98, 930, '4546488-moon-landscape-red-moon-nature.jpg'),
(99, 930, '13-144-503-01 (1).jpg'),
(100, 931, 'download (5).png'),
(101, 931, '4546488-moon-landscape-red-moon-nature.jpg'),
(102, 931, 'Snipaste_2022-08-05_11-15-24.png'),
(103, 932, 'photo-1531263348817-2a52ea675d96.jfif'),
(104, 933, 'photo-1531263348817-2a52ea675d96.jfif'),
(105, 934, 'download.png'),
(106, 935, 'download.png'),
(107, 936, 'download.png');

-- --------------------------------------------------------

--
-- Table structure for table `repstatus`
--

CREATE TABLE `repstatus` (
  `repStatusID` int(11) NOT NULL,
  `repStatusType` varchar(50) NOT NULL,
  `repStatusDateCreated` datetime NOT NULL,
  `repStatusFKreports` int(10) NOT NULL,
  `repUserID` int(10) NOT NULL,
  `repStatusRemark` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `repstatus`
--

INSERT INTO `repstatus` (`repStatusID`, `repStatusType`, `repStatusDateCreated`, `repStatusFKreports`, `repUserID`, `repStatusRemark`) VALUES
(807, 'unapproved', '2023-04-19 11:43:03', 1, 1, NULL),
(813, 'approved', '2023-04-19 13:12:56', 6, 2, 'test'),
(814, 'Fack Checking', '2023-04-19 13:13:08', 7, 2, 'teset'),
(815, 'Solved', '2023-04-19 13:13:38', 7, 2, 'rewrwer'),
(816, 'Fack Checking', '2023-04-19 13:14:11', 7, 2, 'qqqq'),
(817, 'Fack Checking', '2023-04-19 13:14:35', 7, 2, 'www'),
(818, 'Unchange', '2023-04-19 13:14:48', 7, 2, 'qqqqqq'),
(819, 'Fack Checking', '2023-04-19 13:15:06', 7, 2, ''),
(820, 'Unchange', '2023-04-19 13:36:51', 6, 2, 'tr'),
(823, 'approved', '2023-04-19 14:13:15', 1, 1, NULL),
(824, 'unapproved', '2023-04-19 14:14:15', 1, 1, NULL),
(825, 'approved', '2023-04-19 14:14:58', 1, 1, NULL),
(826, 'Fack Checking', '2023-04-19 14:15:33', 1, 2, '1st statsu update'),
(827, 'Wait in line', '2023-04-19 14:16:28', 1, 2, 'wait in line, wit 3 pic'),
(828, 'Wait in line', '2023-04-19 14:16:28', 6, 2, 'wait in line, wit 3 pic'),
(829, 'Wait in line', '2023-04-19 14:16:28', 7, 2, 'wait in line, wit 3 pic'),
(830, 'Solved', '2023-04-19 14:28:26', 1, 2, 'congrate solved'),
(831, 'Solved', '2023-04-19 14:28:26', 6, 2, 'congrate solved'),
(832, 'Solved', '2023-04-19 14:28:26', 7, 2, 'congrate solved'),
(833, 'unapproved', '2023-04-19 15:45:28', 1, 9, ''),
(834, 'approved', '2023-04-19 15:45:46', 6, 9, ''),
(835, 'Unchange', '2023-04-19 15:59:25', 6, 2, 'test'),
(837, 'Wait in line', '2023-04-19 16:02:23', 7, 2, 'testaaaaaaaaa'),
(838, 'Fack Checking', '2023-04-19 16:03:35', 6, 2, 'test'),
(848, 'Wait in line', '2023-04-19 17:58:33', 1, 2, 'test'),
(849, 'Wait in line', '2023-04-19 17:58:33', 6, 2, 'test'),
(850, 'Wait in line', '2023-04-19 17:58:33', 7, 2, 'test'),
(851, 'Unchange', '2023-04-19 17:59:31', 1, 2, 't1'),
(852, 'Unchange', '2023-04-19 18:00:05', 1, 2, 't2'),
(853, 'Wait in line', '2023-04-19 18:05:22', 1, 2, 'terer'),
(854, 'Wait in line', '2023-04-19 18:05:22', 6, 2, 'terer'),
(855, 'Wait in line', '2023-04-19 18:05:22', 7, 2, 'terer'),
(856, 'Wait in line', '2023-04-19 19:30:58', 1, 2, ''),
(857, 'Wait in line', '2023-04-19 19:30:58', 7, 2, ''),
(858, 'Unchange', '2023-04-19 19:32:38', 1, 2, ''),
(859, 'Unchange', '2023-04-19 19:32:38', 7, 2, ''),
(860, 'approved', '2023-04-19 20:27:46', 1, 2, ''),
(861, 'unapproved', '2023-04-19 20:40:35', 1, 1, NULL),
(862, 'approved', '2023-04-19 20:42:53', 1, 1, NULL),
(863, 'unapproved', '2023-04-19 20:44:32', 1, 1, NULL),
(864, 'approved', '2023-04-19 20:45:00', 1, 1, NULL),
(865, 'unapproved', '2023-04-19 20:45:31', 1, 1, NULL),
(866, 'approved', '2023-04-19 20:46:33', 1, 1, NULL),
(867, 'unapproved', '2023-04-19 20:47:06', 1, 1, NULL),
(868, 'approved', '2023-04-19 20:47:36', 1, 1, NULL),
(869, 'unapproved', '2023-04-19 20:50:24', 1, 1, NULL),
(870, 'approved', '2023-04-19 20:51:44', 1, 1, NULL),
(871, 'unapproved', '2023-04-19 20:53:22', 1, 1, NULL),
(872, 'approved', '2023-04-19 20:53:41', 3, 1, NULL),
(873, 'Unchange', '2023-04-20 19:28:26', 6, 2, 'tessdf'),
(874, 'Unchange', '2023-04-20 19:29:36', 3, 2, 'wer'),
(875, 'Unchange', '2023-04-20 19:29:47', 3, 2, ''),
(876, 'Unchange', '2023-04-20 20:10:31', 6, 2, ''),
(877, 'Wait in line', '2023-04-20 20:24:57', 6, 2, 'test '),
(878, 'Solved', '2023-04-20 20:25:12', 6, 2, 'tes 4'),
(879, 'Fack Checking', '2023-04-20 20:25:54', 1, 2, ''),
(880, 'Fack Checking', '2023-04-20 20:25:54', 6, 2, ''),
(881, 'Fack Checking', '2023-04-20 20:25:54', 7, 2, ''),
(882, 'unapproved', '2023-04-20 22:09:26', 1, 2, ''),
(883, 'unapproved', '2023-04-20 22:09:33', 3, 2, ''),
(884, 'approved', '2023-04-20 22:09:49', 1, 1, NULL),
(885, 'Wait in line', '2023-04-20 22:40:15', 1, 2, ''),
(886, 'approved', '2023-04-20 22:40:36', 3, 1, NULL),
(887, 'Solved', '2023-04-20 22:44:33', 6, 2, ''),
(888, 'Wait in line', '2023-04-20 22:46:07', 3, 2, ''),
(889, 'Fack Checking', '2023-04-20 22:50:19', 1, 2, ''),
(890, 'Unchange', '2023-04-20 23:00:49', 1, 2, ''),
(891, 'Unchange', '2023-04-20 23:00:59', 3, 2, ''),
(892, 'Unchange', '2023-04-20 23:04:58', 1, 2, ''),
(893, 'Fack Checking', '2023-04-20 23:08:40', 1, 2, ''),
(894, 'Fack Checking', '2023-04-20 23:08:51', 1, 2, ''),
(895, 'Fack Checking', '2023-04-20 23:09:31', 1, 2, 'qwe'),
(896, 'Wait in line', '2023-04-20 23:09:56', 1, 2, 'qwe'),
(897, 'Fack Checking', '2023-04-20 23:15:38', 1, 2, 'asdasd'),
(898, 'Fack Checking', '2023-04-21 00:09:31', 3, 2, ''),
(899, 'Unchange', '2023-04-21 00:30:59', 1, 2, '232'),
(900, 'Solved', '2023-04-21 00:37:06', 1, 2, ''),
(901, 'Solved', '2023-04-21 00:57:37', 3, 2, ''),
(902, 'Fack Checking', '2023-04-21 15:08:24', 1, 2, ''),
(903, 'Fack Checking', '2023-04-21 15:37:32', 3, 2, ''),
(904, 'unapproved', '2023-04-21 16:12:52', 1, 2, ''),
(905, 'approved', '2023-04-21 16:13:06', 3, 2, ''),
(906, 'Fack Checking', '2023-04-21 23:25:54', 3, 2, ''),
(907, 'Wait in line', '2023-04-21 23:26:04', 6, 2, ''),
(908, 'Fack Checking', '2023-04-21 23:32:04', 6, 2, ''),
(909, 'approved', '2023-04-21 23:48:24', 1, 1, NULL),
(911, 'unapproved', '2023-04-22 04:24:21', 9, 8, 'By Operator'),
(912, 'approved', '2023-04-22 10:28:48', 9, 1, NULL),
(915, 'unapproved', '2023-04-24 18:11:49', 10, 1, '123123'),
(916, 'unapproved', '2023-04-24 18:11:49', 11, 1, '123'),
(917, 'unapproved', '2023-04-24 18:11:49', 10, 1, '123123'),
(918, 'unapproved', '2023-04-24 18:11:49', 11, 1, '123'),
(919, 'approved', '2023-04-25 00:13:39', 10, 1, NULL),
(920, 'approved', '2023-04-25 00:13:42', 11, 1, NULL),
(921, 'unapproved', '2023-04-25 09:08:27', 1, 2, ''),
(922, 'unapproved', '2023-04-25 12:13:10', 9, 2, ''),
(923, 'Wait in line', '2023-04-25 12:14:19', 6, 2, ''),
(924, 'Wait in line', '2023-04-25 12:14:19', 7, 2, ''),
(925, 'Wait in line', '2023-04-25 12:14:19', 10, 2, ''),
(926, 'Wait in line', '2023-04-25 12:14:19', 11, 2, ''),
(927, 'approved', '2023-04-25 12:19:57', 9, 1, NULL),
(928, 'Solved', '2023-04-25 12:22:27', 6, 2, ''),
(929, 'Fack Checking', '2023-04-25 12:51:35', 9, 2, ''),
(930, 'Fack Checking', '2023-04-25 12:52:44', 3, 2, ''),
(931, 'Fack Checking', '2023-04-25 12:53:32', 7, 2, ''),
(932, 'Fack Checking', '2023-04-26 11:50:29', 6, 2, ''),
(933, 'Fack Checking', '2023-04-26 11:50:38', 3, 2, ''),
(934, 'Fack Checking', '2023-04-26 11:51:17', 6, 2, ''),
(935, 'Fack Checking', '2023-04-26 11:51:17', 9, 2, ''),
(936, 'Fack Checking', '2023-04-26 11:51:17', 10, 2, ''),
(937, 'approved', '2023-04-26 12:57:34', 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `fullname` tinytext NOT NULL,
  `type` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `fullname`, `type`) VALUES
(1, 'user1', '123', 'Meow', 'Operator'),
(2, 'user2', '123', 'Chan Tai Man', 'Housing Authority'),
(4, 'user3', '123', 'complainer', 'complainer'),
(5, 'user4', '123', '林立志', 'complainer'),
(6, 'user5', '123', '周伯通', 'complainer'),
(7, 'user6', '123', '裘千尺', 'complainer'),
(8, 'user7', '123', '盛九莉', 'complainer'),
(9, 'user8', '123', 'Aristotle', 'Environment Protection department');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `camera`
--
ALTER TABLE `camera`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail`
--
ALTER TABLE `mail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mail_ibfk_1` (`reportId`),
  ADD KEY `mail_ibfk_2` (`userId`);

--
-- Indexes for table `mailimage`
--
ALTER TABLE `mailimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `imageRepMailID` (`mailId`);

--
-- Indexes for table `mousecountingrecord`
--
ALTER TABLE `mousecountingrecord`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKCameraIDForRecord` (`cameraID`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `repFKrepUserID` (`userId`);

--
-- Indexes for table `reportimage`
--
ALTER TABLE `reportimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reportImage_ibfk_1` (`reportId`);

--
-- Indexes for table `reportstatusimage`
--
ALTER TABLE `reportstatusimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `repImageFKrepStatusID` (`reportStatusId`);

--
-- Indexes for table `repstatus`
--
ALTER TABLE `repstatus`
  ADD PRIMARY KEY (`repStatusID`),
  ADD KEY `repStatusFKreports` (`repStatusFKreports`),
  ADD KEY `repStatusUserID` (`repUserID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `camera`
--
ALTER TABLE `camera`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mail`
--
ALTER TABLE `mail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220891;

--
-- AUTO_INCREMENT for table `mailimage`
--
ALTER TABLE `mailimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99563;

--
-- AUTO_INCREMENT for table `mousecountingrecord`
--
ALTER TABLE `mousecountingrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=519;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `reportimage`
--
ALTER TABLE `reportimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reportstatusimage`
--
ALTER TABLE `reportstatusimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `repstatus`
--
ALTER TABLE `repstatus`
  MODIFY `repStatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=938;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mail`
--
ALTER TABLE `mail`
  ADD CONSTRAINT `maiFKOfficerID` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `mailFKrepID` FOREIGN KEY (`reportId`) REFERENCES `report` (`id`),
  ADD CONSTRAINT `mail_ibfk_1` FOREIGN KEY (`reportId`) REFERENCES `report` (`id`),
  ADD CONSTRAINT `mail_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `mailimage`
--
ALTER TABLE `mailimage`
  ADD CONSTRAINT `imageRepMailID` FOREIGN KEY (`mailId`) REFERENCES `mail` (`id`);

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `repFKrepUserID` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `reportimage`
--
ALTER TABLE `reportimage`
  ADD CONSTRAINT `reportImage_ibfk_1` FOREIGN KEY (`reportId`) REFERENCES `report` (`id`);

--
-- Constraints for table `reportstatusimage`
--
ALTER TABLE `reportstatusimage`
  ADD CONSTRAINT `repImageFKrepStatusID` FOREIGN KEY (`reportStatusId`) REFERENCES `repstatus` (`repStatusID`);

--
-- Constraints for table `repstatus`
--
ALTER TABLE `repstatus`
  ADD CONSTRAINT `repStatusFKreports` FOREIGN KEY (`repStatusFKreports`) REFERENCES `report` (`id`),
  ADD CONSTRAINT `repStatusUserID` FOREIGN KEY (`repUserID`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
