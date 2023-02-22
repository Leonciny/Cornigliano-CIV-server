const PARAM_IDENTIFIER = "?"

let queries = {
    'login'          : "SELECT * FROM Utente WHERE (username="+ PARAM_IDENTIFIER +"OR email="+ PARAM_IDENTIFIER +") AND password="+ PARAM_IDENTIFIER,
    'findUtente'     : "SELECT * FROM Utente WHERE email="+ PARAM_IDENTIFIER +" OR username="+ PARAM_IDENTIFIER,
    'addUtente'      : "INSERT INTO Utente(email,password,data_iscr,username,nome) VALUES("+ PARAM_IDENTIFIER+ "," +PARAM_IDENTIFIER+ "," +PARAM_IDENTIFIER+ "," +PARAM_IDENTIFIER+ "," +PARAM_IDENTIFIER+ ")",
    'puntiUtente'    : "SELECT punti FROM Utente WHERE id="+ PARAM_IDENTIFIER,
    'showAllPremi'   : "SELECT id, nome FROM Premio",
    'showPremio'     : "SELECT nome,descrizione,punti_nessari FROM Premio WHERE id="+ PARAM_IDENTIFIER,
    'showAllNegozi'  : "SELECT id, nome FROM Negozio WHERE is_active=true",
    'showNegozio'    : "SELECT nome, descrizione, indirizzo, coordinate FROM Negozio WHERE id="+ PARAM_IDENTIFIER,
}

/*
queries.login.replace(PARAM_IDENTIFIER, param1)
queries.login.replace(PARAM_IDENTIFIER, param2)
queries.login.replace(PARAM_IDENTIFIER, param3)
*/