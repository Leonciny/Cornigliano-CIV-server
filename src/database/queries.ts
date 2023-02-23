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

}
export useQueries()