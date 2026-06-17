import { useState } from "react";

export function usePesquisa(){
    const [pesquisa,setPesquisa]=useState("");
    return{pesquisa,setPesquisa};
}