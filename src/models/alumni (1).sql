-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2021 at 02:34 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `children_details`
--

CREATE TABLE `children_details` (
  `id` int(11) NOT NULL,
  `name_of_child` varchar(100) NOT NULL,
  `age` varchar(20) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `child_image` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `children_details`
--

INSERT INTO `children_details` (`id`, `name_of_child`, `age`, `sex`, `child_image`) VALUES
(1, 'kks', '', '', 'C:fakepathimageedit_3_4782581125.png'),
(2, 'uijkj', '', '', 'C:fakepathNoorcoop Mark.png'),
(3, 'kks', '', '', 'C:fakepathimageedit_3_4782581125.png'),
(4, 'uijkj', '', '', 'C:fakepathNoorcoop Mark.png'),
(5, 'kks', '', '', 'C:fakepathWhatsApp Image 2021-07-25 at 05.28.23 (1).jpeg'),
(6, 'uijkj', '', '', 'C:fakepathqrcode_www.google.com.png');

-- --------------------------------------------------------

--
-- Table structure for table `event_list`
--

CREATE TABLE `event_list` (
  `id` int(11) NOT NULL,
  `event_name` varchar(400) NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `time` time NOT NULL,
  `other_info` varchar(500) NOT NULL,
  `venue` varchar(500) NOT NULL,
  `event_picture` varchar(400) NOT NULL,
  `theme` varchar(400) NOT NULL,
  `group_id` varchar(400) NOT NULL,
  `group_name` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_list`
--

INSERT INTO `event_list` (`id`, `event_name`, `date_from`, `date_to`, `time`, `other_info`, `venue`, `event_picture`, `theme`, `group_id`, `group_name`) VALUES
(1, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(2, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(3, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(4, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(5, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(6, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', '', '', ''),
(7, 'jnhhjk', '0878-08-07', '2021-08-16', '19:25:00', 'klikjklj', ';koko', '', '', '', ''),
(8, 'Code Pyramid', '2021-08-10', '2021-08-12', '09:40:00', 'There a lot of wackeries', 'Grand Square', '', '', '1', 'FCE 2021 Alumni Graduation'),
(9, 'Naming Ceremony', '2021-08-26', '2021-08-26', '17:52:00', 'There will be enough eatry', 'Lamido Cresent', '', '', '1', 'FCE 2021 Alumni Graduation'),
(10, '', '0000-00-00', '0000-00-00', '00:00:00', '', '', '', '', '', ''),
(11, 'hdj', '2021-08-17', '2021-08-11', '09:19:00', 'hh', 'uu', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628357034/bgu5gffdcu9m6pisaah1.png', '', '', ''),
(12, 'hui', '2021-08-11', '2021-08-18', '05:32:00', 'ee', 'jhjhn', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628515787/smsbyr8u7hzboj6llldk.png', '', '', ''),
(13, 'hui', '2021-08-12', '2021-08-13', '05:42:00', 'dd', 'jhjhn', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628516422/ax9zjdqdmfp15m8t0wqb.png', '', '', ''),
(14, 'hui', '2021-08-19', '2021-08-12', '05:47:00', 'uuu', 'jhjhn', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628516678/wjefwk509kivgliqmipw.png', '', '', ''),
(15, 'hui', '2021-08-11', '2021-08-27', '06:08:00', 'uu`', 'jhjhn', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628518082/gutqtfmixlasqggrfoh8.jpg', 'jj', '', ''),
(16, 'jnhhjk', '2021-08-10', '2021-08-12', '06:14:00', 'hhwee', 'jajja', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628518323/dwovf8tjl4pitz7cqj9d.jpg', 'jss', '', ''),
(17, 'djdjkdj', '0909-09-08', '0089-08-09', '09:08:00', 'kj', 'hhkh', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628776314/seii0n0bpnmhkcixbmf7.png', 'jnlk', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `event_pictures`
--

CREATE TABLE `event_pictures` (
  `id` int(11) NOT NULL,
  `event_name` varchar(300) NOT NULL,
  `imageUrl` varchar(300) NOT NULL,
  `user` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_pictures`
--

INSERT INTO `event_pictures` (`id`, `event_name`, `imageUrl`, `user`) VALUES
(8, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628184607/edgewood:stage/001.jpg.jpg', ''),
(9, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628184607/edgewood:stage/001.jpg.jpg', ''),
(10, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', ''),
(11, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', ''),
(12, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', ''),
(13, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', ''),
(14, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', ''),
(15, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628254777/edgewood:stage/barista-beverage-black-coffee-2878712.jpg.jpg', ''),
(16, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', ''),
(17, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', ''),
(18, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', ''),
(19, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', 'ee'),
(20, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', 'ee'),
(21, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(22, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', 'ee'),
(23, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', 'ee'),
(24, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(25, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628212511/edgewood:stage/001.jpg.jpg', 'ee'),
(26, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', 'ee'),
(27, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(28, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(29, '', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', 'ee'),
(30, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628209873/edgewood:stage/193212115.png.png', 'ee'),
(31, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(32, 'jnhhjk', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(33, 'jnhhjk', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628345089/edgewood:stage/Capture1.JPG.jpg', 'ee'),
(34, 'jnhhjk', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(35, 'jnhhjk', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628345089/edgewood:stage/Capture1.JPG.jpg', 'ee'),
(36, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628347877/edgewood:stage/gsk-logo2.jpg.jpg', 'ee'),
(37, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628347881/edgewood:stage/item11.jpg.jpg', 'ee'),
(38, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628347879/edgewood:stage/logo_512.png.png', 'ee'),
(39, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628210849/edgewood:stage/Avater.png.png', 'ee'),
(40, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628254777/edgewood:stage/barista-beverage-black-coffee-2878712.jpg.jpg', 'ee'),
(41, 'Naming Ceremony', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628766213/edgewood:stage/WhatsApp%20Image%202021-07-27%20at%2009.04.49.jpeg.jpg', 'undefined'),
(42, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776099/edgewood:stage/qrcode_www.google.com.png.png', '5'),
(43, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776101/edgewood:stage/WhatsApp%20Image%202021-07-25%20at%2005.28.23%20%281%29.jpeg.jpg', '5'),
(44, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776102/edgewood:stage/WhatsApp%20Image%202021-07-25%20at%2005.28.23.jpeg.jpg', '5'),
(45, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628766213/edgewood:stage/WhatsApp%20Image%202021-07-27%20at%2009.04.49.jpeg.jpg', '5'),
(46, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776099/edgewood:stage/qrcode_www.google.com.png.png', '5'),
(47, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776101/edgewood:stage/WhatsApp%20Image%202021-07-25%20at%2005.28.23%20%281%29.jpeg.jpg', '5'),
(48, 'Code Pyramid', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628776102/edgewood:stage/WhatsApp%20Image%202021-07-25%20at%2005.28.23.jpeg.jpg', '5');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `group_name` varchar(400) NOT NULL,
  `group_member` varchar(400) NOT NULL,
  `created_by` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_name`, `group_member`, `created_by`) VALUES
(1, 'FCE 2021 Alumni Graduation', '1', '0706ri');

-- --------------------------------------------------------

--
-- Table structure for table `group_members`
--

CREATE TABLE `group_members` (
  `id` int(11) NOT NULL,
  `group_id` varchar(400) NOT NULL,
  `member_id` varchar(400) NOT NULL,
  `created_by` varchar(400) NOT NULL,
  `group_name` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_members`
--

INSERT INTO `group_members` (`id`, `group_id`, `member_id`, `created_by`, `group_name`) VALUES
(1, '1', '0706r', '', 'FCE 2021 Alumni Graduation'),
(2, '1', '0991', '', 'FCE 2021 Alumni Graduation'),
(3, '1', '5', '', 'FCE 2021 Alumni Graduation'),
(4, '1', '0706r', '', 'FCE 2021 Alumni Graduation'),
(5, '1', '0706r', '', 'FCE 2021 Alumni Graduation');

-- --------------------------------------------------------

--
-- Table structure for table `invitation_table`
--

CREATE TABLE `invitation_table` (
  `id` int(11) NOT NULL,
  `group_id` varchar(400) NOT NULL,
  `sender_id` varchar(400) NOT NULL,
  `reciever_id` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `first_name` varchar(500) NOT NULL,
  `last_name` varchar(500) NOT NULL,
  `other_name` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `profile_pic` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `imageUrl` varchar(300) NOT NULL,
  `address` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `imageUrl`, `address`) VALUES
(3, 'yasir', 'Hassan', '09018661696', 'ysquare.theimperial@gmail.com', '$2a$10$Y5S0O81FyIaHq/Di1iBLNudk4p9nJkg8pzlK7khMAkq', '', ''),
(4, 'Ali', 'Ali', '12345', 'ysquare.theimperia1l@gmail.com', '$2a$10$Yea6nhBV33ECBi6Iiw3mPeP4pUL6juDnWPkQ5mU98iP', '', ''),
(5, 'New', 'new', '123456', 'ysquare.theim11perial@gmail.com', '123', '', ''),
(6, 'chi', 'ii', '0991', 'ii', '123', '', ''),
(7, '', '', '', '', '', '', ''),
(8, 'jhsih', 'hiuh', 'hi', 'uhuihih', 'hih', '', ''),
(9, 'ghikhsi', 'huih', 'ihhii', 'hihi', 'hih', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1627954825/stz87oe5ok30srion80t.jpg', ''),
(10, 'kjsgk', 'gkgk', 'kgkg', 'kgkgk', 'gkgk', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1627959059/ino3vcndw327fczm3lg0.jpg', ''),
(11, 'chigozie3', 'jacobj', '0706r', 'eeey', '12', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628766213/edgewood:stage/WhatsApp%20Image%202021-07-27%20at%2009.04.49.jpeg.jpg', 'Badawa t'),
(12, 'huuhjk', 'kjkj', 'khk', 'jj', 'jkj', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628136733/vb7abupcxgz9isfsdbtk.png', ''),
(13, '1', '1', '1', '1', '1', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628765930/anrdkqhagraamv52ibru.png', ''),
(14, '2', '2', '2', '2', '2', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628771662/ge0c9nric7a2uo9kphmu.jpg', ''),
(15, '3', '3', '3', '3', '3', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628774796/vzqcjlnkvtxzzqbcuqsr.jpg', ''),
(16, '5', '5', '5', '5', '5', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628775759/xeyucpkjnwwurpix61tf.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirmPassword` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `children_details`
--
ALTER TABLE `children_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_list`
--
ALTER TABLE `event_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_pictures`
--
ALTER TABLE `event_pictures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_members`
--
ALTER TABLE `group_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invitation_table`
--
ALTER TABLE `invitation_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `children_details`
--
ALTER TABLE `children_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `event_list`
--
ALTER TABLE `event_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `event_pictures`
--
ALTER TABLE `event_pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `group_members`
--
ALTER TABLE `group_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `invitation_table`
--
ALTER TABLE `invitation_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
