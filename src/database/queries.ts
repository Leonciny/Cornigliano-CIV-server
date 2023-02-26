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
    'showAllNegozi'       : "SELECT id ,nome, indirizzo FROM Negozio ORDER BY is_active DESC",
    'addNegozio'          : "INSERT INTO Negozio(nome,data_registrazione,is_active,descrizione,indirizzo,coordinate) VALUES("+PARAM_ID+","+PARAM_ID+", true,"+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'addAcquisto'         : "INSERT INTO Acquisto(data_ora,punti,idMegozio,idUtente) VALUES("+PARAM_ID+","+PARAM_ID+","+PARAM_ID+","+PARAM_ID+")",
    'addPunti'            : "UPDATE Utente SET punti = punti+"+PARAM_ID+"WHERE id="+PARAM_ID,
    'redeemPremio'        : "INSERT INTO UtenteRiscattaPremio(idUtente,idPremio) VALUES("+PARAM_ID+","+PARAM_ID+")",
    'removePunti'         : "UPDATE Utente SET punti = punti-(SELECT punti_necessari FROM Premio WHERE id="+PARAM_ID+") WHERE id="+PARAM_ID+" AND punti>=(SELECT punti_necessari FROM Premio WHERE id="+PARAM_ID+")"
}

function useQueries(...parameters: Array<string>){
    switch(parameters[0]){
        case "login":
                    if(parameters.length != 3)
                        return "ERROR: Incorrect number of parameters. Required (Username OR Email),password: 2"
                    let query = dictQuery.login
                    query = query.replace(PARAM_ID,parameters[1])
                    query = query.replace(PARAM_ID,parameters[1])
                    query = query.replace(PARAM_ID,parameters[2])
                    return query
        case "findUtente": 
                        if(parameters.length != 2)
                            return "ERROR: Incorrect number of parameters. Required username or email: 1"
                        let query = dictQuery.findUtente.replace(PARAM_ID,parameters[1])
                        query = query.replace(PARAM_ID,parameters[1])
                        return query
        case "showUtente": 
                        if(parameters.length != 2)
                            return "ERROR: Incorrect number of parameters. Required ID: 1"
                        return dictQuery.showUtente.replace(PARAM_ID,parameters[1])
        case "addUtente": 
                        if(parameters.length != 6)
                            return "ERROR: Incorrect number of parameters. Required Username, email, nome, data_registrazione, password: 5"
                        let query = dictQuery.addUtente
                        for(let i=1;dictQuery.addUtente.indexOf(PARAM_ID)!=-1;i++){
                            query = query.replace(PARAM_ID,parameters[i])
                        }
                        return query
        case "showAllPremi":
                            if(parameters.length != 1)
                                return "ERROR: Incorrect number of parameters. NOT required: 0"
                            return dictQuery.showAllPremi
        case "showPremio":
                            if(parameters.length != 2)
                                return "ERROR: Incorrect number of parameters. Required ID: 1"
                            return dictQuery.showPremio.replace(PARAM_ID,parameters[1])
        case "addPremio":   
                        if(parameters.length != 5)
                            return "ERROR: Incorrect number of parameters. Required nome, descrizione, punti_necessari, quant_magazzino: 4"
                        let query = dictQuery.addPremio
                        for(let i=1;dictQuery.addPremio.indexOf(PARAM_ID)!=-1;i++){
                            query = query.replace(PARAM_ID,parameters[i])
                        }
                        return query
        case "showNegoziActive": if(parameters.length != 1)
                                    return "ERROR: Incorrect number of parameters. NOT required: 0"
                                return dictQuery.showNegoziActive
        case "showNegoziNotActive": if(parameters.length != 1)
                                        return "ERROR: Incorrect number of parameters. NOT required: 0"
                                    return dictQuery.showNegoziNotActive
        case "showNegozio": if(parameters.length != 2)
                                return "ERROR: Incorrect number of parameters. Required only ID: 1"
                            queryResult = dictQuery.showNegozio.replace(PARAM_ID,parameters[1])
                            return queryResult
        case "showAllNegozi":
                            if(parameters.length != 1)
                                return "ERROR: Incorrect number of parameters. NOT required: 0"
                            return dictQuery.showAllNegozi
        case "addNegozio": 
                        if(parameters.length != 7)
                            return "ERROR: Incorrect number of parameters. Required nome, data_registrazione, is_active, descrizione, indirizzo, coordinate: 6"
                        let query = dictQuery.addNegozio
                        for(let i=1;dictQuery.addNegozio.indexOf(PARAM_ID)!=-1;i++){
                            query = query.replace(PARAM_ID,parameters[i])
                        }
                        return query
        case "addAcquisto": 
                        if(parameters.length != 5)
                            return "ERROR: Incorrect number of parameters. Required data_ora, punti, idMegozio, idUtente: 4"
                        let query = dictQuery.addAcquisto
                        for(let i=1;dictQuery.addAcquisto.indexOf(PARAM_ID)!=-1;i++){
                            query = query.replace(PARAM_ID,parameters[i])
                        }
                        return query
        case "addPunti":
                        if(parameters.length != 3)
                            return "ERROR: Incorrect number of parameters. Required punti, ID: 2"
                        let query = dictQuery.addPunti
                        query = query.replace(PARAM_ID,parameters[1])
                        query = query.replace(PARAM_ID,parameters[2])
                        return query
        case "redeemPremio":
                        if(parameters.length != 3)
                            return "ERROR: Incorrect number of parameters. Required idUtente, idPremio: 2"
                        let query = dictQuery.redeemPremio
                        query = query.replace(PARAM_ID,parameters[1])
                        query = query.replace(PARAM_ID,parameters[2])
                        return query
        case "removePunti":
                        if(parameters.length != 3)
                            return "ERROR: Incorrect number of parameters. Required idPremio, idUtente: 2"
                        let query = dictQuery.removePunti
                        query = query.replace(PARAM_ID,parameters[1])
                        query = query.replace(PARAM_ID,parameters[2])
                        query = query.replace(PARAM_ID,parameters[1])
                        return query
    }
}
export default useQueries()