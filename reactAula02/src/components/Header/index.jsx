import styles from '../Header/Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span>Icone</span>
                <nav>
                    <a href=''>Barra de buscar</a>
                    <a href=''>Link Cadastra-se</a>
                    <a href=''>Botão</a>
                    <a href=''>Carrinho</a>
                </nav>
            </div>
            <div className={styles.headerBottom}>

                <Link to='/Home'>Home</Link>
                <Link to='/Produtos'>Produtos</Link>
                <Link to='/Categorias'>Categorias</Link>
                <Link to='/MeusPedidos'>Meus Pedidos</Link>
                <Link to='/Login'>login</Link>
                <Link to='/CriarConta'>Criar Conta</Link>
            </div>
       </header>
    )
}

export default Header