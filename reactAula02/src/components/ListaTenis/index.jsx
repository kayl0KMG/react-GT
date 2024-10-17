import react, { useState, useEffect } from 'react';
import styles from '../ListaTenis/styles.module.css'

function ListaDeTenis (){
    const [tenis, setTenis] = useState([]);

    useEffect(()=> {
        async function carregarTenis() {
            const resposta = await fetch('https://api-store-do1w.onrender.com/shoes')
            const imagemtenis = await resposta.json()

            setTenis(imagemtenis)
        }
        carregarTenis();
    }, []);

    return(
        <>
            <ul>
                {tenis.map(tenis => {
                    <li key={tenis.id}>
                        <img src={tenis.imagem_url} classsName={styles.img} alt='' />
                    </li>

                })}
            </ul>
        </>
    )


}

export default ListaDeTenis;