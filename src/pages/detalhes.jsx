import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DadosContext } from "../context/dados";
import { BtnTopo } from "../Hooks/buttonTopo";
import { BuscarPais } from "../Services/apiCountrie";

function Detalhes() {
  const { country } = useParams();
  const { dados } = useContext(DadosContext);

  BuscarPais();
  const pais = dados.find((p) =>
    p.country.toLowerCase()
  .includes(country.toLowerCase())
  )

  if (!pais) return <h1>País não encontrado</h1>;

  return (
    <>
   

      <h1>Página de detalhes (Cidades)</h1>

      <h2>Nome: {pais.country}</h2>
      <h2>ISO2: {pais.iso2}</h2>
      <h2>ISO3: {pais.iso3}</h2>
      <img className="Pick" src={`https://flagsapi.com/${pais.iso2}/flat/64.png`} alt="" />
 <br /><br />
      <div className="divDetails">
          <ol >
           
            {pais.cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          
          </ol>
      </div>
      <BtnTopo/>
    </>
  );
}

export default Detalhes;