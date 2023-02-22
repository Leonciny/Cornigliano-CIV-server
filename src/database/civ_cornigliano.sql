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
  idUtente int NOT NULL,
  FOREIGN KEY (idNegozio) REFERENCES Negozio(id),
  FOREIGN KEY (idUtente) REFERENCES Utente(id)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `Negozio`
--

Create table Negozio(
  id int auto_increment PRIMARY KEY,
  nome varchar(100),
  data_registrazione date,
  is_active boolean,
  descrizione varchar(255),
  indirizzo varchar(255),
  coordinate varchar(255)
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
  idUtente int NOT NULL,
  idPremio int NOT NULL,
  is_redeeemed boolean,
  PRIMARY KEY(idUtente,idPremio),
  FOREIGN KEY (idUtente) REFERENCES Utente(id),
  FOREIGN KEY (idPremio) REFERENCES Premio(id)
);

-- --------------------------------------------------------