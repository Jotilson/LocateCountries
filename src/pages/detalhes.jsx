import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DadosContext } from "../context/dados";

function Detalhes() {
  const { country } = useParams();
  const { dados } = useContext(DadosContext);

  const pais = dados.find((p) =>
    p.country.toLowerCase().includes(country.toLowerCase())
  );

  if (!pais) return <h1>País não encontrado</h1>;

  return (
    <>
      <h1>Página de detalhes (Cidades)</h1>

      <h2>Nome: {pais.country}</h2>
      <h2>ISO2: {pais.iso2}</h2>
      <h2>ISO3: {pais.iso3}</h2>
 <br /><br />
      <div className="divDetails">
          <ol >
           
            {pais.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          
          </ol>
      </div>
    </>
  );
}

export default Detalhes;