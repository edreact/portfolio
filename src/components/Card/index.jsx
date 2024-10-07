import styles from "./Card.module.css";
import { BsCartPlus } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; // Importar Link

function Card({ id, name, description, price, imageUrl }) {
    return (
        <Link to={`/produto/${id}`} className={styles.card}>
            <section>
                <img src={imageUrl} alt={name} className={styles.productImage} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p className={styles.price}>R$ {price}</p>
                <div className={styles.card_footer}>
                    <button className={styles.botao}>
                        <BsCartPlus /> Adicionar ao Carrinho
                    </button>
                </div>
            </section>
        </Link>
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
