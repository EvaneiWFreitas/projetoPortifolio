import styles from './Card.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


function Card(){
    return(
        <section className={styles.card}>
            <h3>Título do Projeto</h3>
            <p>Texto descritivo do projeto.</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <FaJsSquare />
                   <FaReact />
                   
                </div>
                <button className={styles.card_botao}>
                    <FaLongArrowAltRight />
                </button>
            </div>
        </section>
    )
}

export default Card;
