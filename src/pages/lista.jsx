import { useContext } from "react"
import { PaisContext } from "../context/paises";
import './home.css'

function Lista(){
 const {dadosL}=useContext(PaisContext);

 console.log("Lista",dadosL)

    return(
        <>
     <h1>Lista de todos Países</h1>   
     {dadosL.map((pais) => (
        <div key={pais.country}>
            <p className="p">Nome: {pais.country}</p>
            <img src={`https://flagsapi.com/${pais.iso2}/flat/64.png`} alt={`Bandeira de ${pais.country}`} />
        </div>
     ))}
        </>
    )
}
export default Lista