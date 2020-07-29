-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2020 at 09:00 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `translation`
--

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `doc_id` int(11) NOT NULL,
  `from_` varchar(100) DEFAULT NULL,
  `to_` varchar(100) DEFAULT NULL,
  `input` mediumtext CHARACTER SET utf8,
  `output` mediumtext CHARACTER SET utf8,
  `user_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fist_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `category` text NOT NULL,
  `sub_category` text NOT NULL,
  `course2` text NOT NULL,
  `translated_to` text NOT NULL,
  `institution` text NOT NULL,
  `local_lang_understanding` text NOT NULL,
  `local_lang_typing` text NOT NULL,
  `local_lang_writing` text NOT NULL,
  `undertanken_translation` text NOT NULL,
  `studied_similar` text NOT NULL,
  `taught_similar` text NOT NULL,
  `qualification` text NOT NULL,
  `i_am` text NOT NULL,
  `title` text NOT NULL,
  `gender` text NOT NULL,
  `whatsapp` text NOT NULL,
  `mother_tounge` text NOT NULL,
  `mother_tounge_lang` text NOT NULL,
  `institute_state` text NOT NULL,
  `aicte_approved` text NOT NULL,
  `institute_name` text NOT NULL,
  `cleansing` text NOT NULL,
  `validator` text NOT NULL,
  `year_experience` text NOT NULL,
  `domain` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fist_name`, `last_name`, `email`, `phone`, `category`, `sub_category`, `course2`, `translated_to`, `institution`, `local_lang_understanding`, `local_lang_typing`, `local_lang_writing`, `undertanken_translation`, `studied_similar`, `taught_similar`, `qualification`, `i_am`, `title`, `gender`, `whatsapp`, `mother_tounge`, `mother_tounge_lang`, `institute_state`, `aicte_approved`, `institute_name`, `cleansing`, `validator`, `year_experience`, `domain`, `password`) VALUES
(1, 'Shivanshu', 'Gupta', 'shivanshu981@gmail.com', '9817267338', 'Btech', 'Btech', 'Btech', 'Hindi', 'GEU', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'good', 'Teacher', 'hgsdj', 'Male', '321321312', 'YES', 'Bengali', 'Kerala', 'YES', 'K E T POLYTECHNIC COLLEGE,KRISHNAGIRI', 'NO', 'NO', '6-10', 'Self Paced', '12345678'),
(2, 'Rahul', 'Sharma', 'shivanshu@gmail.com', '9817267338', 'Btech', 'Btech', 'Btech', 'Hindi', 'GEU', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'Hindi', 'good', 'Student', 'hgsdj', 'Male', '321321312', 'YES', 'Marathi', 'Lakshadweep', 'YES', 'A M C . ENGINEERING COLLEGE,BANGALORE URBAN', 'NO', 'NIL', 'NIL', 'NIL', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`doc_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
