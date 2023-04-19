-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2023 at 04:00 PM
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
-- Database: `fyp_android`
--

-- --------------------------------------------------------

--
-- Table structure for table `mail`
--

CREATE TABLE `mail` (
  `id` int(11) NOT NULL,
  `reportId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `isRead` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mailimage`
--

CREATE TABLE `mailimage` (
  `id` int(11) NOT NULL,
  `mailId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mailread_user`
--

CREATE TABLE `mailread_user` (
  `reportId` int(11) NOT NULL,
  `readMax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsID` int(11) NOT NULL,
  `title` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `descr` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `type` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `descr` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `address` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `dept` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reportimage`
--

CREATE TABLE `reportimage` (
  `id` int(11) NOT NULL,
  `reportId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reportstatusimage`
--

CREATE TABLE `reportstatusimage` (
  `id` int(11) NOT NULL,
  `reportStatusId` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinytext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mail`
--
ALTER TABLE `mail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reportId` (`reportId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `mailimage`
--
ALTER TABLE `mailimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mailId` (`mailId`);

--
-- Indexes for table `mailread_user`
--
ALTER TABLE `mailread_user`
  ADD PRIMARY KEY (`reportId`),
  ADD KEY `readMax` (`readMax`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsID`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mail`
--
ALTER TABLE `mail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mailimage`
--
ALTER TABLE `mailimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reportimage`
--
ALTER TABLE `reportimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reportstatusimage`
--
ALTER TABLE `reportstatusimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `repstatus`
--
ALTER TABLE `repstatus`
  MODIFY `repStatusID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mail`
--
ALTER TABLE `mail`
  ADD CONSTRAINT `mail_ibfk_1` FOREIGN KEY (`reportId`) REFERENCES `report` (`id`),
  ADD CONSTRAINT `mail_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `mailimage`
--
ALTER TABLE `mailimage`
  ADD CONSTRAINT `mailImage_ibfk_1` FOREIGN KEY (`mailId`) REFERENCES `mail` (`id`);

--
-- Constraints for table `mailread_user`
--
ALTER TABLE `mailread_user`
  ADD CONSTRAINT `mailRead_user_ibfk_1` FOREIGN KEY (`reportId`) REFERENCES `report` (`id`),
  ADD CONSTRAINT `mailRead_user_ibfk_2` FOREIGN KEY (`readMax`) REFERENCES `mail` (`id`);

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

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
