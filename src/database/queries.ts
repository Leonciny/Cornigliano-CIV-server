const PARAM_IDENTIFIER = "?"

let queries = {
    'login'         : "SELECT id FROM Utente WHERE (username="+ PARAM_IDENTIFIER +"OR email="+ PARAM_IDENTIFIER +") AND password="+ PARAM_IDENTIFIER,
    'findUtente'    : "SELECT id FROM Utente WHERE email="+ PARAM_IDENTIFIER +" OR username="+ PARAM_IDENTIFIER,
    'showUtente'    : "SELECT nome, username, punti FROM Utente WHERE id="+PARAM_IDENTIFIER,
    'addUtente'     : "INSERT INTO Utente(email,password,data_iscr,username,nome) VALUES("+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+")",
    'showAllPremi'  : "SELECT id, nome FROM Premio",
    'showPremio'    : "SELECT nome,descrizione,punti_nessari FROM Premio WHERE id="+ PARAM_IDENTIFIER,
    'addPremio'     : "INSERT INTO Premio(nome,descrizione,punti_necessari,quant_magazzino) VALUES("+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+")",
    'showAllNegozi' : "SELECT id, nome FROM Negozio WHERE is_active=true",
    'showNegozio'   : "SELECT nome, descrizione, indirizzo, coordinate FROM Negozio WHERE id="+ PARAM_IDENTIFIER,
    'addNegozio'    : "INSERT INTO Negozio(nome,data_registrazione,is_active,descrizione,indirizzo,coordinate) VALUES("+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+", true,"+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+")",
    'addAcquisto'   : "INSERT INTO Acquisto(data_ora,punti,idMegozio,idUtente) VALUES("+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+")",
    'addPunti'      : "UPDATE Utente SET punti = (SELECT punti FROM Utente WHERE id="+PARAM_IDENTIFIER+")+"+PARAM_IDENTIFIER+"WHERE id="+PARAM_IDENTIFIER,
    'redeemPremio'  : "INSERT INTO UtenteRiscattaPremio(idUtente,idPremio,is_reedemed) VALUES("+PARAM_IDENTIFIER+","+PARAM_IDENTIFIER+",true)",
    'removePunti'   : "UPDATE Utente SET punti = (SELECT punti FROM Utente WHERE id="+PARAM_IDENTIFIER+")-(SELECT punti_necessari FROM Premio WHERE id="+PARAM_IDENTIFIER+")"
}
/*
queries.login.replace(PARAM_IDENTIFIER, param1)
queries.login.replace(PARAM_IDENTIFIER, param2)
queries.login.replace(PARAM_IDENTIFIER, param3)
*/