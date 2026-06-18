import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { FavoritoContext } from "../context/favoritoContext"
import { BtnTopo } from "../Hooks/buttonTopo"
import './home.css'


function Favorite(){
    const {paisFavorito}=useContext(FavoritoContext);

   const paises=JSON.parse(localStorage.getItem("FavoriteCountry")).flat()
   const naviget=useNavigate()

    if(!paises.length || paises.length===0){
        return <h1>Sem favoritos</h1>
    }
    
     function clearList(){
        const his=[]
        
        localStorage.setItem("FavoriteCountry",JSON.stringify(his))
     }
    return(
        <>
 
        <h1>Países Favoritos</h1>
 
        {paises.map((pais,index)=>(
            <div key={index} className="divFavor" title="Clica pra ver mais detalhes" onClick={()=> 
            naviget(`/detalhes/${pais.country}`)}>

                <p >Nome: {pais.country}</p>
                <img src={`https://flagsapi.com/${pais.iso2}/flat/64.png`} alt="" />
            </div>

        ))}
        <button className="BtnClear">Limpar lista</button>
<BtnTopo/>
        </>
        
    )
}

export default Favorite