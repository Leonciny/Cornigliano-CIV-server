const PARAM_ID = "?";

const dictQuery = {
    'login'               : "SELECT id FROM Utente WHERE (username="+ PARAM_ID +"OR email="+ PARAM_ID +") AND password="+ PARAM_ID,
    'findUtente'          : "SELECT id FROM Utente WHERE email="+ PARAM_ID +" OR username="+ PARAM_ID,
    'showUtente'          : "SELECT nome, username, punti FROM Utente WHERE id="+PARAM_ID,
    'addUtente'           : "INSERT INTO Utente(email,password,data_iscr,username,nome) VALUES("+PARAM_ID+","+PARAM_ID+","+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'showAllPremi'        : "SELECT id, nome FROM Premio",
    'showPremio'          : "SELECT nome,descrizione,punti_nessari FROM Premio WHERE id="+ PARAM_ID,
    'addPremio'           : "INSERT INTO Premio(nome,descrizione,punti_necessari,quant_magazzino) VALUES("+PARAM_ID+","+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'showNegoziActive'    : "SELECT id, nome, indirizzo FROM Negozio WHERE is_active=true",
    'showNegoziNotActive' : "SELECT id, nome, indirizzo FROM Negozio WHERE is_active=false",
    'showNegozio'         : "SELECT nome, descrizione, indirizzo, coordinate FROM Negozio WHERE id="+ PARAM_ID,
    'showAllNegozi'       : "SELECT id ,nome, indirizzo FROM Negozio",
    'addNegozio'          : "INSERT INTO Negozio(nome,data_registrazione,is_active,descrizione,indirizzo,coordinate) VALUES("+PARAM_ID+","+PARAM_ID+", true,"+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'addAcquisto'         : "INSERT INTO Acquisto(data_ora,punti,idMegozio,idUtente) VALUES("+PARAM_ID+","+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'addPunti'            : "UPDATE Utente SET punti = (SELECT punti FROM Utente WHERE id="+PARAM_ID+")+"+PARAM_ID+"WHERE id="+PARAM_ID,
    'redeemPremio'        : "INSERT INTO UtenteRiscattaPremio(idUtente,idPremio,is_reedemed) VALUES("+PARAM_ID+","+PARAM_ID+",true)",
    'removePunti'         : "UPDATE Utente SET punti = (SELECT punti FROM Utente WHERE id="+PARAM_ID+")-(SELECT punti_necessari FROM Premio WHERE id="+PARAM_ID+")"
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
                                return dictQuery.showNegoziActive
                                break
        case "showNegoziNotActive": if(parameters.length != 1)
                                        return "ERROR: Incorrect number of parameters. NOT required: 0"
                                    return dictQuery.showNegoziNotActive
                                    break
        case "showNegozio": if(parameters.length != 2)
                                return "ERROR: Incorrect number of parameters. Required only ID: 1"
                            dictQuery.showNegozio.replace(PARAM_ID,parameters[1])
                            break
    }
}
export default useQueries()