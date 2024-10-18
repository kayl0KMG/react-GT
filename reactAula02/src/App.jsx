import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import ListaDeTenis from './components/ListaTenis';
// import Saudacao from './components/saudacao/saudacao';
// import BotaoDinamico from './components/BotaoDinamico/BotaoDinamico';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login'; 
import CriarConta from './pages/CriarConta';
import MeusPedidos from './pages/MeusPedidos';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';


function App() {

  return (  //como se fosse a tag body
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='*' element={<HomePage/>} />
            <Route path='/CriarConta' element={<CriarConta/>} />
            <Route path='/MeusPedidos' element={<MeusPedidos/>} />
            <Route path='/Produtos' element={<Produtos/>} />
            <Route path='/Categorias' element={<Categorias/>} />
          </Routes>
        </div>
      </Router>











      {/* <NavbarComponent /> */}
      {/* <ListaDeTenis/>

      <BotaoDinamico cor='blue'click={EnviarDados}>Enviar</BotaoDinamico>
      <BotaoDinamico cor='red'click={DeletarDados}>Deletar</BotaoDinamico> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button> 
          count is 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}
export default App
