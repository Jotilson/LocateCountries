import { useState } from "react";

export function usePais(){
    const [pais,setPais]=useState([]);
    return{pais,setPais}
}