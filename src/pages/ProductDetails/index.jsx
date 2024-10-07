import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3dPYXXfTqou_D_yv_XdmAm5FVPkKJ8NehotNPtf8ELTVJJ-QpXBT3k1D-kF3VG6W7/exec');
            const data = await response.json();
            const foundProduct = data.saida.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Carregando detalhes do produto...</p>;
    }

    return (
        <div className={styles.productDetails}>
            {/* Breadcrumb - caminho de navegação */}
            <div className={styles.breadcrumb}>
                {/* Ajuste para a rota correta de projetos */}
                <Link to="/projetos">Projetos</Link> <span>Detalhes</span>
            </div>

            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className={styles.mainImage} />

            <div className={styles.productInfo}>
                <h3>Detalhes do Produto</h3>
                <p><strong>Preço:</strong> R$ {product.price}</p>
                <p><strong>Descrição:</strong> {product.description}</p>
                
                <div className={styles.extraImages}>
                    <h3>Mais Imagens</h3>
                    <img src={product.imageUrl} alt="Extra 1" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
