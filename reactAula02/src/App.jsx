import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ListaDeTenis from './components/ListaTenis';
import Saudacao from './components/saudacao/saudacao';
import BotaoDinamico from './components/BotaoDinamico/BotaoDinamico';


function App() {
 const saldo = 10
 const saldo2 = 12
  return (  //como se fosse a tag body
    <>
      {/* <NavbarComponent /> */}
      <Header />
      <ListaDeTenis/>
      <Saudacao nome='Fulano' saldo={saldo}/>
      <Saudacao nome='Maria' saldo={saldo2}/>
      <BotaoDinamico cor='blue'click={EnviarDados}>Enviar</BotaoDinamico>
      <BotaoDinamico cor='red'click={DeletarDados}>Deletar</BotaoDinamico>
      <BotaoDinamico cor='green'click={RetornaDados}>Retorna</BotaoDinamico>
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
