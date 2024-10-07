import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3dPYXXfTqou_D_yv_XdmAm5FVPkKJ8NehotNPtf8ELTVJJ-QpXBT3k1D-kF3VG6W7/exec');
            const data = await response.json();
            setProducts(data.saida);
            setFilteredProducts(data.saida); // Exibir todos os produtos inicialmente
        }
        fetchProducts();
    }, []);

    // Função para lidar com a pesquisa
    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchValue)
        );
        setFilteredProducts(filtered);
    };

    // Últimos 4 produtos adicionados
    const latestProducts = products.slice(-4);

    return (
        <div className={styles.container}>

            {/* Campo de pesquisa no topo */}
            <section className={styles.searchSection}>
                <input
                    type="text"
                    placeholder="Pesquisar por nome"
                    value={searchTerm}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />
            </section>

            <main className={styles.projetos}>
                <h2>Produtos</h2>
                {filteredProducts.length > 0 ? (
                    <section className={styles.lista}>
                        {filteredProducts.map((product) => (
                            <Card
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </section>
                ) : (
                    <p>Nenhum produto encontrado...</p>
                )}

                {/* Seção dos últimos 4 produtos */}
                <hr className={styles.divider} />
                <h3>Últimos Produtos Adicionados</h3>
                <section className={styles.latest}>
                    {latestProducts.map((product) => (
                        <Card
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Projetos;
