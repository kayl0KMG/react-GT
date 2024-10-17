import styles from '../Header/Header.module.css'

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
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Categorias</a>
                <a href="">Meus Pedidos</a>
            </div>
       </header>
    )
}

export default Header