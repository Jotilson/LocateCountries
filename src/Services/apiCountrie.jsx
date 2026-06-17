
import { useContext, useEffect } from 'react'
import { useLoad } from '../Hooks/load'
import { useErro } from '../Hooks/erro';
import { PaisContext } from '../context/paises';
import { DadosContext } from '../context/dados';

 export function BuscarPais(){
    const {load,setLoad}=useLoad();
     const {setErro}=useErro();
    const {setDados}=useContext(DadosContext);
     const {setDadosL}=useContext(PaisContext);

     useEffect(()=>{
      async function buscaPais(){
        try {
          const resposta=await fetch("https://countriesnow.space/api/v0.1/countries")
    
          const dado=await resposta.json()
         
          setDados(dado.data)
     setDadosL(dado.data)    
      
        } catch (error) {
          setErro("[ERROR]: Requisição dos dados!")
        }finally{
      setLoad(false)
        }
       }
       buscaPais()
      },[setDados, setLoad, setErro, setDadosL]);
 if(load){
    return <h1>Carregando...</h1>
 }
      return null;
}

