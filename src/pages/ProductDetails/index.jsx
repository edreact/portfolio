import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxQNS7qveTq3daVm9vcpohPOAWs6s5PeOCZ7MNyTrfcL8piABpqCq1aoS5R84xU593m2A/exec');
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
                <Link to="/projetos">Projetos</Link> <span> &gt; Detalhes</span>
            </div>

            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} className={styles.mainImage} />

            <div className={styles.productInfo}>
                <p><strong>Valor:</strong> R$ {product.price}</p>
                <p><strong>Categoria:</strong> {product.description}</p>

                <p><strong>Detalhes:</strong> {product.ProductDetails}</p>

                <p><strong>Descrição:</strong> {product.ProductDescription}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
