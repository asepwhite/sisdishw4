-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 29 Nov 2017 pada 22.20
-- Versi Server: 5.7.19
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sisdis`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pings`
--

CREATE TABLE `pings` (
  `npm` int(11) NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `npm` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `saldo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `npm`, `nama`, `saldo`, `createdAt`, `updatedAt`) VALUES
(27, 1406623064, 'Akbar Septriyan', 31, '2017-10-31 00:20:23', '2017-10-31 18:39:15'),
(33, 1406623065, 'User 65', 1000, '2017-10-31 08:31:12', '2017-10-31 14:01:14'),
(34, 1406623066, 'User 66', 2000, '2017-10-31 08:32:23', '2017-10-31 14:01:46'),
(35, 1406623067, 'User 67', 3000, '2017-10-31 08:33:01', '2017-10-31 08:34:11'),
(36, 777, 'user 777', 0, '2017-10-31 13:18:07', '2017-10-31 13:18:07'),
(37, 999, 'user999', 0, '2017-10-31 13:31:34', '2017-10-31 13:31:34'),
(38, 888, 'user888', 0, '2017-10-31 14:22:20', '2017-10-31 14:22:20'),
(39, 555, 'user555', 0, '2017-10-31 14:23:15', '2017-10-31 14:23:15'),
(40, 1406623054, 'user54', 0, '2017-10-31 18:12:08', '2017-10-31 18:12:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `npm` (`npm`),
  ADD UNIQUE KEY `users_npm_unique` (`npm`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
