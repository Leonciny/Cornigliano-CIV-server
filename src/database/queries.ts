const PARAM_ID = "?";

const dictQuery = {
    'login'               : "Query login",
    'findUtente'          : "Query findUtente",
    'addUtente'           : "Query addUtente",
    'showNegoziActive'    : "Query showNegoziActive",
    'showNegoziNotActive' : "Query showNegoziNotActive",
    'showAllNegozi'       : "SELECT id,nome,indirizzo FROM Negozio"
}

function useQueries(...parameters: Array<string>){
    switch(parameters[0]){
        case "login": if(parameters.length != 3)
                        return "ERROR: Incorrect number of parameters. Required (Username OR Email),password: 2"
                    if(typeof parameters[1] === "string" && parameters[1].indexOf('@')!=-1){
                        dictQuery.login.replace(PARAM_ID,parameters[1])
                        dictQuery.login.replace(PARAM_ID,parameters[1])
                        dictQuery.login.replace(PARAM_ID,parameters[2])
                    }
                    else
                        return "ERROR: required a username or email"
                    break
        case "findUtente": if(parameters.length != 2)
                            return "ERROR: Incorrect number of parameters. Required ID: 1"
                          dictQuery.findUtente.replace(PARAM_ID,parameters[1])
                          break
        case "addUtente": if(parameters.length != 6)
                            return "ERROR: Incorrect number of parameters. Required Username,email,nome,data_registrazione,password: 5"
                        for(let i=1;dictQuery.addUtente.indexOf(PARAM_ID)!=-1;i++){
                            dictQuery.addUtente.replace(PARAM_ID,parameters[i])
                        }
                        break
        case "showNegoziActive": if(parameters.length != 1)
                                    return "ERROR: Incorrect number of parameters. NOT required: 0"
                                dictQuery.showNegoziActive.replace(PARAM_ID,"true")
                                break
        case "showNegoziNotActive": if(parameters.length != 1)
                                        return "ERROR: Incorrect number of parameters. NOT required: 0"
                                    dictQuery.showNegoziActive.replace(PARAM_ID,"false")
                                    break
        case "showNegozio": if(parameters.length != 2)
                                return "ERROR: Incorrect number of parameters. Required only ID: 1"
                            dictQuery.showNegoziNotActive.replace(PARAM_ID,parameters[1])
                            break
        case ""
    }
const PARAM_IDENTIFIER = "?"

}
export useQueries()
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