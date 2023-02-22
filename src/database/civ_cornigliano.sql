-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 21, 2023 alle 23:13
-- Versione del server: 10.4.25-MariaDB
-- Versione PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `civ_cornigliano`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Premio`
--

Create table Premio(
  id int auto_increment PRIMARY KEY,
  nome varchar(50),
  descrizione varchar(255),
  punti_necessari int,
  quant_magazzino int
);

-- --------------------------------------------------------

--
-- Struttura della tabella `Acquisto`
--

Create table Acquisto(
  id int auto_increment PRIMARY KEY,
  data_ora date,
  punti int,
  idNegozio int NOT NULL,
  FOREIGN KEY (idNegozio) REFERENCES Negozio(id)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `Negozio`
--

Create table Negozio(
  id int auto_increment PRIMARY KEY,
  nome varchar(100),
  data_registrazione date,
  is_active bool,
  descrizione varchar(255),
  indirizzo varchar(255),
  coordinate varchar(255)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `UtenteFaAqcquisto`
--
Create table UtenteFaAqcuisto(
  idUtente int Not Null,
  idAcquisto int Not Null,
  PRIMARY KEY(idUtente,idAcquisto),
  FOREIGN KEY (idUtente) REFERENCES Utente(id),
  FOREIGN KEY (idAcquisto) REFERENCES Acquisto(id)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `Utente`
--
Create table Utente(
  id int auto_increment PRIMARY KEY,
  email varchar(50) UNIQUE,
  password varchar(50),
  data_iscr date,
  username varchar(50) UNIQUE,
  nome varchar(50),
  punti int  DEFAULT 0
);

-- --------------------------------------------------------

--
-- Struttura della tabella `UtenteRiscattaPremio`
--
Create table UtenteRiscattaPremio(
  idUtente int Not Null,
  idPremio int Not Null,
  is_redeeemed bool,
  PRIMARY KEY(idUtente,idPremio),
  FOREIGN KEY (idUtente) REFERENCES Utente(id),
  FOREIGN KEY (idPremio) REFERENCES Premio(id)
);

-- --------------------------------------------------------