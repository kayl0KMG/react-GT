function BotaoDinamico(props){ //props-PROPRIEDADES
   const estiloBotao = {
    backgroundColor: props.cor,
    color: 'white',
    padding: '15px',
    margin: '10px',
    border: 'none',
    borderRadius: '90px',
    cursor: 'progress',
    fontSize: '16px',
   }

   return <button style={estiloBotao} onClick={props.click}>
             {props.children}
          </button>
}

export default BotaoDinamico