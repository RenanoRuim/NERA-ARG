import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import Noticias from "../components/Noticias";
import FotoMar from "../assets/FotoDoMar1.png";

import "../styles/Home.css";
export default function Home() {
  return (
    <>
      <Header />
      <main className="home-container">
        <h1>Página Inicial</h1>

        <section className="hero-section">
          <img src={FotoMar} alt="Foto do Mar" className="deco-image" />

          <div className="hero-content">
            <p className="welcome-text">Bem-vindo ao NERA!!</p>
            <p className="hero-description">
              O oceano sempre foi tratado como uma fonte de vida, mas pouco se
              fala sobre aquilo que existe abaixo de sua superfície. Durante
              anos, pesquisadores estudaram os efeitos da poluição, das
              alterações químicas e dos resíduos descartados no ambiente
              marinho. Alguns desses estudos foram interrompidos. Outros nunca
              chegaram ao público...
            </p>
          </div>
        </section>

        <Noticias />
      </main>
      <Footer />
    </>
  );
}
