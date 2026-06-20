import { useContext, useState} from 'react'
import './home.css'
import { DadosContext } from '../context/dados';
import { PaisContext } from '../context/paises'
import {BuscarPais} from '../Services/apiCountrie'
import { useLoad } from '../Hooks/load'
import { useErro } from '../Hooks/erro';
import { usePesquisa } from '../Hooks/pesquisa';
import { usePais } from '../Hooks/pais';
import { FavoritoContext } from '../context/favoritoContext';
import { BtnTopo } from '../Hooks/buttonTopo';

function Home(){
  const {dados}=useContext(DadosContext)
  const {load}=useLoad();
  const {erro,setErro}=useErro();
  const {pesquisa,setPesquisa}=usePesquisa();
  const {pais,setPais}=usePais();
  const {setPaisFavorito}=useContext(FavoritoContext);
  const [favor,setFavor]=useState("Favoritar") 
  
   function locatecountry(){
  setFavor("Favoritar")
    const filtrado=dados.filter((country)=>
      country.country.toLowerCase()
    .includes(pesquisa.toLowerCase())
    )
 if(filtrado.length>0 && pesquisa.trim()!==""){
  setPais(filtrado)
 }else{
  setPais([])
    setErro("País não encontrado!")
  setTimeout(()=>{
   setErro("")
  },2000)

 } 
   }
  
  function favoritar(){
  setPaisFavorito(pais);

  const historico=JSON.parse(localStorage.getItem("FavoriteCountry")) || [];
 historico.push(pais)
 
  localStorage.setItem("FavoriteCountry",JSON.stringify(historico))
  setFavor("Favoritado")
  } 
  
    return(
        <>
 <BuscarPais/>     
     <section>
       
      {erro && (<h1 className='h1'>Error: {erro}</h1>)}
          
        <h1>Localizador de país</h1>
      <h3>Pesquisa o país pelo nome <br /> em português/Inglês</h3>

    
        <p><input type="text" name="" id="" value={pesquisa}
        onChange={(e)=> setPesquisa(e.target.value)} placeholder='Nome do País' required/></p>
        <button onClick={locatecountry}>Buscar</button>
     
      <div className='div'>
          {pais.map((paises)=>(
          
            <div key={paises.country} >
           <img src={`https://flagsapi.com/${paises.iso2}/flat/64.png`} alt={`Bandeira de ${paises.country}`} />
           <p>ISO2: {paises.iso2}</p>
           <h3>Cidades</h3>
           <button className='btnFavorito' onClick={favoritar}>{favor}</button>
           <ol>
               {paises.cities.map((city)=>(
               <li key={city}>{city}</li>
               ))}
           </ol>
            </div>
          
          ))}
      </div>
     </section>
     <BtnTopo/>

        </>
    )
}

export default Home