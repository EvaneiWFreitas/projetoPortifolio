import styles from './Card.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from 'react-router-dom'


function Card({ name, description, html_url }){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                   <FaHtml5 />
                   <FaCss3Alt />
                   <FaJsSquare />
                   <FaReact />         
                </div>
                <Link to={html_url} className={styles.card_botao}>
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </section>
    )
}

export default Card;
