import { createContext, useState } from "react";

export const PaisContext=createContext();

export function PaisProvider({children}){
    const [dadosL,setDadosL]=useState([])

    return(
    <PaisContext.Provider value={{dadosL,setDadosL}}>
        {children}
    </PaisContext.Provider>
    )
}