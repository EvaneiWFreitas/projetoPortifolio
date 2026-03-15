import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            Olá, sou <br />
            <span>Evanei Freitas</span>
            <br />
            Dev Full Stack
          </p>
          <Link to="/sobre" className="btn btn-secondary botao_red">
            Saiba mais sobre mim...
          </Link>
        </div>
        <figure>
          <img
            className="img-fluid img-home"
            src="/programador.svg"
            alt="Imagem de home"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home;
