import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { PaisProvider } from './context/paises.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PaisProvider>
   <App/>
  </PaisProvider>
  </BrowserRouter>,
)
