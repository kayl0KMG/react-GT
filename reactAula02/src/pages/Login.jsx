import BotaoDinamico from "../components/BotaoDinamico/BotaoDinamico"

const Login = () => { 
    return(
       <div>
           <h1>
              Página de Login
           </h1>
           <p>
              Faça seu login abaixo:
           </p>
           <BotaoDinamico cor='green'>Entrar</BotaoDinamico>
           <BotaoDinamico cor='Blue'>Criar Conta</BotaoDinamico>
       </div>
    )

}

export default Login