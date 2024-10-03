
import styles from './Sobre.module.css'
//import avatar from './images/avatar.png'
//import html from './images/icon-html.svg'
//import css from './images/icon-css.svg'
//import js from './images/icon-js.svg'
//import react from './images/icon-react.svg'
//import node from './images/icon-node.svg'
//import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
  
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Edson</span> <br />
                    <strong>Dev</strong> </p>

                    <p>Trabalho com desenvolvimento Web</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    
                </div>
            </div>

        </section>
    )
}

export default Sobre

