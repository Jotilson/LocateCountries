import { useState } from "react";

 export function useLoad(){
    const [load,setLoad]=useState(true)
    return {load,setLoad};
}