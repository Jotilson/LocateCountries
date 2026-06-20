import { memo } from "react";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { PaisContext } from "../context/paises";
import './home.css'
import { usePais } from "../Hooks/pais";
import { FavoritoContext } from "../context/favoritoContext";
import { BtnTopo } from "../Hooks/buttonTopo";
import { DadosContext } from "../context/dados";
import { BuscarPais} from "../Services/apiCountrie";

function Lista(){

 const {dados}=useContext(DadosContext);
  const [favor,setFavor]=useState("Favoritar") 
  const [name,setName]=useState("")
  const {pais,setPais}=usePais();
  const {setPaisFavorito}=useContext(FavoritoContext)
const navigate=useNavigate()


  function favoritar(paes){
   setPaisFavorito(pais);

  const historico=JSON.parse(localStorage.getItem("FavoriteCountry")) || [];
 historico.push(paes)
 
  localStorage.setItem("FavoriteCountry",JSON.stringify(historico))
  }

    return(
        <>
        <BuscarPais/>
     <h1>Lista de todos Países</h1>   
     {dados.map((paiss) => (
        <div key={paiss.country} className="divR" >
            <p className="p">Nome: {paiss.country}</p>
            <img src={`https://flagsapi.com/${paiss.iso2}/flat/64.png`} alt={`Bandeira de ${paiss.country}`} />
            <button className='btnFavorito' onClick={() => favoritar(paiss)}>{favor}</button>
        </div>
     ))}
     <BtnTopo/>
        </>
    )
}
export default memo(Lista)