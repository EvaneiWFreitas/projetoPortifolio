import styles from "./Sobre.module.css";
import avatar from "./images/fotoNovaNey.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>
            Sou <span>Evanei Freitas</span>
            <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2021.</p>
          <p>
            Sou apaixonado por transformar idéias em realidade digital.<br />
            Especializado em criação de aplicações dinâmicas e intuitivas,
            <br /> com foco na experiência de usuários.
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="icone do html" />
          <img src={css} alt="icone do css" />
          <img src={js} alt="icone do js" />
          <img src={react} alt="icone do react" />
          <img src={sql} alt="icone do sql" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
