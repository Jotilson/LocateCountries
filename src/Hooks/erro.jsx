import { useState } from "react";

 export function useErro(){
 const [erro,setErro]=useState("");

 return {erro,setErro};
}