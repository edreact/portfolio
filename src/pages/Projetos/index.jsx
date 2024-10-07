import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {
    const [repositories, setRepositories] = useState([]); // Estado para armazenar produtos
    const [lastProducts, setLastProducts] = useState([]); // Estado para últimos produtos
    const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar a pesquisa

    useEffect(() => {
        const fetchData = async () => {
            // Faz a requisição para a API
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3dPYXXfTqou_D_yv_XdmAm5FVPkKJ8NehotNPtf8ELTVJJ-QpXBT3k1D-kF3VG6W7/exec');
            const data = await response.json();
            setRepositories(data.saida); // Armazena todos os produtos
            setLastProducts(data.saida.slice(-4)); // Armazena os últimos 4 produtos
        };
        fetchData();
    }, []);

    // Filtra produtos com base na pesquisa
    const filteredRepositories = repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className={styles.projetos}>
            <h2>Minha Loja Virtual</h2>

            {/* Campo de pesquisa sempre visível no topo */}
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.produtos}>
                {filteredRepositories.length > 0 ? (
                    <section className={styles.cardContainer}>
                        {filteredRepositories
                            .sort((a, b) => a.name.localeCompare(b.name)) // Ordena produtos em ordem alfabética
                            .map((repo) => (
                                <Card
                                    key={repo.id}
                                    id={repo.id} // Passa o ID para o Card
                                    name={repo.name}
                                    description={repo.description}
                                    price={repo.price}
                                    imageUrl={repo.imageUrl}
                                />
                            ))}
                    </section>
                ) : (
                    <p>Carregando produtos...</p>
                )}
            </div>

            <hr className={styles.divider} />

            <h3 className={styles.ultimosProdutos}>Últimos Produtos</h3>
            <div className={styles.cardContainer}>
                {lastProducts.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id} // Passa o ID para o Card
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projetos;
