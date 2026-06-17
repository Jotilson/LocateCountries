import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { PaisProvider } from './context/paises.jsx'
import { DadosProvider } from './context/dados.jsx'
import { FavoritoProvider } from './context/favoritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PaisProvider>
    <DadosProvider>
      <FavoritoProvider>
         <App/>
      </FavoritoProvider>
    </DadosProvider>
  </PaisProvider>
  </BrowserRouter>,
)
