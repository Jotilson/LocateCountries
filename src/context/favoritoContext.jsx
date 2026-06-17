import { useState,createContext } from "react";

export const FavoritoContext=createContext();

export function FavoritoProvider({children}){
    const [paisFavorito,setPaisFavorito]=useState([])
    return(
        <FavoritoContext.Provider value={{paisFavorito,setPaisFavorito}}>
            {children}
        </FavoritoContext.Provider>
    )
}