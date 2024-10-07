import styles from "./Card.module.css";
import { BsCartPlus } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom"; // Importar Link e useNavigate

function Card({ id, name, description, price, imageUrl }) {
    const navigate = useNavigate(); // Hook para navegação

    const handleAddToCart = () => {
        // Redirecionar para a página 404 quando o botão "Adicionar ao Carrinho" for clicado
        navigate('/Page404');
    };

    return (
        <div className={styles.card}> {/* Torna o card clicável */}
            <Link to={`/produto/${id}`} className={styles.cardLink}> {/* Adiciona o link para a página de detalhes */}
                <section>
                    <img src={imageUrl} alt={name} className={styles.productImage} />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p className={styles.price}>R$ {price}</p>
                </section>
            </Link>
            <div className={styles.card_footer}>
                <button className={styles.botao} onClick={handleAddToCart}>
                    <BsCartPlus /> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}

// Validação das props
Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Card;
