const dictTables = {
    'Negozio'               :   "Create table IF NOT EXIST Negozio(id int auto_increment PRIMARY KEY, nome varchar(100),data_registrazione date,is_active bool,descrizione varchar(255),indirizzo varchar(255),coordinate varchar(255));",
    'Premio'                :   "Create table IF NOT EXIST Premio(id int auto_increment PRIMARY KEY,nome varchar(50),descrizione varchar(255),punti_necessari int,quant_magazzino int);",
    'Utente'                :   "Create table IF NOT EXIST Utente(id int auto_increment PRIMARY KEY,email varchar(50) UNIQUE,password varchar(50),data_iscr date,username varchar(50) UNIQUE,nome varchar(50),punti int DEFAULT 0);",
    'Acquisto'              :   "Create table IF NOT EXIST Acquisto(id int auto_increment PRIMARY KEY,data_ora date,punti int,idNegozio int NOT NULL,FOREIGN KEY (idNegozio) REFERENCES Negozio(id));",
    'UtenteRiscattaPremio'  :   "Create table IF NOT EXIST UtenteRiscattaPremio(idUtente int Not Null,idPremio int Not Null,is_redeeemed bool,PRIMARY KEY(idUtente,idPremio),FOREIGN KEY (idUtente) REFERENCES Utente(id),FOREIGN KEY (idPremio) REFERENCES Premio(id));",
    'UtenteFaAcquisto'      :   "Create table IF NOT EXIST UtenteFaAqcuisto(idUtente int Not Null,idAcquisto int Not Null,PRIMARY KEY(idUtente,idAcquisto),FOREIGN KEY (idUtente) REFERENCES Utente(id),FOREIGN KEY (idAcquisto) REFERENCES Acquisto(id));"
}