import styles from "./Card.module.css";
import { BsCartPlus } from "react-icons/bs";
import PropTypes from 'prop-types'; // Importar PropTypes

function Card({ name, description, price, imageUrl }) {
    return (
        <section className={styles.card}>
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
    );
}

// Validação das props
Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Card;
