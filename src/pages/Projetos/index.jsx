import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3dPYXXfTqou_D_yv_XdmAm5FVPkKJ8NehotNPtf8ELTVJJ-QpXBT3k1D-kF3VG6W7/exec');
            const data = await response.json();
            console.log(data); // Para depuração
            setProducts(data.saida); // Acessando o array dentro de 'saida'
        }
        fetchProducts();
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Loja Virtual</h2>
            {
                products.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            products.map((product) => (
                                <Card
                                    key={product.id} // O ID deve ser único
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando produtos...</p>
                )
            }
        </section>
    );
}

export default Projetos;
