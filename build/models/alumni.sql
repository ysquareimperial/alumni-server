-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2021 at 02:55 PM
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
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `theme` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_list`
--

INSERT INTO `event_list` (`id`, `event_name`, `date_from`, `date_to`, `time`, `other_info`, `venue`, `event_picture`, `theme`) VALUES
(1, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(2, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(3, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(4, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(5, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(6, 'hui', '0788-08-09', '8908-09-09', '18:32:00', 'jkhk', 'jhjhn', '', ''),
(7, 'jnhhjk', '0878-08-07', '2021-08-16', '19:25:00', 'klikjklj', ';koko', '', ''),
(8, 'Code Pyramid', '2021-08-10', '2021-08-12', '09:40:00', 'There a lot of wackeries', 'Grand Square', '', ''),
(9, 'Naming Ceremony', '2021-08-26', '2021-08-26', '17:52:00', 'There will be enough eatry', 'Lamido Cresent', '', ''),
(10, '', '0000-00-00', '0000-00-00', '00:00:00', '', '', '', ''),
(11, 'hdj', '2021-08-17', '2021-08-11', '09:19:00', 'hh', 'uu', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628357034/bgu5gffdcu9m6pisaah1.png', '');

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
(38, 'hui', 'https://res.cloudinary.com/dgha88o7d/image/upload/v1628347879/edgewood:stage/logo_512.png.png', 'ee');

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
  `imageUrl` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `imageUrl`) VALUES
(3, 'yasir', 'Hassan', '09018661696', 'ysquare.theimperial@gmail.com', '$2a$10$Y5S0O81FyIaHq/Di1iBLNudk4p9nJkg8pzlK7khMAkq', ''),
(4, 'Ali', 'Ali', '12345', 'ysquare.theimperia1l@gmail.com', '$2a$10$Yea6nhBV33ECBi6Iiw3mPeP4pUL6juDnWPkQ5mU98iP', ''),
(5, 'New', 'new', '123456', 'ysquare.theim11perial@gmail.com', '123', ''),
(6, 'chi', 'ii', '0991', 'ii', '123', ''),
(7, '', '', '', '', '', ''),
(8, 'jhsih', 'hiuh', 'hi', 'uhuihih', 'hih', ''),
(9, 'ghikhsi', 'huih', 'ihhii', 'hihi', 'hih', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1627954825/stz87oe5ok30srion80t.jpg'),
(10, 'kjsgk', 'gkgk', 'kgkg', 'kgkgk', 'gkgk', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1627959059/ino3vcndw327fczm3lg0.jpg'),
(11, 'chigozie', 'jacob', '0706', 'ee', '12', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1627984214/suvsw92tmw0eqg83ppcb.png'),
(12, 'huuhjk', 'kjkj', 'khk', 'jj', 'jkj', 'http://res.cloudinary.com/dgha88o7d/image/upload/v1628136733/vb7abupcxgz9isfsdbtk.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event_list`
--
ALTER TABLE `event_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `event_pictures`
--
ALTER TABLE `event_pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
