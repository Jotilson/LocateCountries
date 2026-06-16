import { useContext, useEffect, useState } from 'react'
import './home.css'
import { PaisContext } from '../context/paises'
function Home(){

  const [load,setLoad]=useState(true)
  const [erro,setErro]=useState("")
  const [dados,setDados]=useState([])
  const [pesquisa,setPesquisa]=useState("")
  const [pais,setPais]=useState([])
 const {dadosL,setDadosL}=useContext(PaisContext);

  useEffect(()=>{
  async function buscarPais(){
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
   buscarPais()
  },[])


   if(load){
     return <h1>Carregando...</h1>
   }
   
   function locatecountry(){
    console.log(`${pesquisa}`)
    const filtrado=dados.filter((country)=>
      country.country.toLowerCase()
    .includes(pesquisa.toLowerCase())
    )
 if(filtrado.length>0 && pesquisa.trim()!=""){
  setPais(filtrado)
  setErro("")
 }else{
  
  setErro("País não encontrado!")
 }
   }

    return(
        <>
       
     <section>
      {erro? <h1 className='h1'>Erros: {erro}</h1>:null}
          
        <h1>Localizador de país</h1>
      <h3>Pesquisa o país pelo nome <br /> em português/Inglês</h3>

    
        <p><input type="text" name="" id="" value={pesquisa}
        onChange={(e)=> setPesquisa(e.target.value)} placeholder='Nome do País' required/></p>
        <button onClick={locatecountry}>Buscar</button>
     
      <div className='div'>
          {pais.map((paises)=>(
          
            <div key={paises.country} >
           <img src={`https://flagsapi.com/${paises.iso2}/flat/64.png`} alt={`Bandeira de ${paises.country}`} />
           <p>Cidades</p>
           <ul>
               {paises.cities.map((city)=>(
               <li key={city}>{city}</li>
               ))}
           </ul>
            </div>
          
          ))}
      </div>
     </section>

        </>
    )
}

export default Home