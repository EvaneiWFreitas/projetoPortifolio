import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
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
          <button className="btn btn-secondary botao_red">
            Saiba mais sobre mim...
          </button>
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

export default App;
