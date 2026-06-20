import { memo } from "react"
import { useNavigate } from "react-router-dom"
import './home.css'
function Home2(){
    
const navigate=useNavigate()

  const historico=JSON.parse(localStorage.getItem("FavoriteCountry"))

  if(!historico){
    localStorage.setItem("FavoriteCountry",JSON.stringify([]))
  }
    return (
    <>
    
    <h1>Localiza o seu país e veja mais informações</h1>
    <button className="btnH2" onClick={()=> navigate('/home')}>ENTRAR</button>
</>

    )
}

export default memo(Home2)