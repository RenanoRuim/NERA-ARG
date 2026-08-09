import Header from "../components/Cabecario";
import Footer from "../components/Footer";

import "../styles/About.css";

export default function About() {
  return (
    <>
      <Header />
      <main className="about-container">
        <h1>Sobre Nós</h1>

        <section className="heroAbout-section">
          <div className="heroAbout-content">
            <p className="welcomeAbout-text">Sobre Nós</p>
            <div className="heroAbout-description">
              <p>
                A NERA é uma organização dedicada à pesquisa, ao monitoramento e
                ao desenvolvimento de soluções voltadas à compreensão dos
                oceanos e dos ambientes marinhos. Nosso trabalho busca
                acompanhar as constantes transformações dos ecossistemas
                oceânicos, analisando seus impactos sobre a biodiversidade, o
                clima e a vida no planeta.
              </p>
              <p>
                Nos últimos anos, entretanto, o mundo passou por mudanças que
                ultrapassaram os limites dos problemas ambientais conhecidos.
                Alterações incomuns na composição da água, fenômenos climáticos
                extremos e a contaminação de diferentes regiões passaram a
                representar uma ameaça direta à população. Entre esses
                fenômenos, a chamada Chuva Tóxica tornou-se um dos maiores
                desafios enfrentados pela humanidade.Nos últimos anos,
                entretanto, o mundo passou por mudanças que ultrapassaram os
                limites dos problemas ambientais conhecidos. Alterações incomuns
                na composição da água, fenômenos climáticos extremos e a
                contaminação de diferentes regiões passaram a representar uma
                ameaça direta à população. Entre esses fenômenos, a chamada
                Chuva Tóxica tornou-se um dos maiores desafios enfrentados pela
                humanidade.
              </p>
              <p>
                A NERA trabalha para compreender as causas desse fenômeno e
                desenvolver meios de reduzir seus efeitos. Nossos pesquisadores
                monitoram a qualidade da água, as alterações atmosféricas e as
                mudanças observadas nos ecossistemas afetados, buscando
                identificar padrões que possam ajudar na contenção da crise.
              </p>
              <p>
                A situação atual exige mais do que respostas imediatas. A
                contaminação ambiental provocou consequências que ainda não
                somos capazes de compreender completamente, afetando
                comunidades, animais e regiões inteiras. Diante de um mundo que
                enfrenta uma crise sem precedentes, a pesquisa científica
                tornou-se uma das nossas principais ferramentas para encontrar
                uma solução.
              </p>
              <p>
                Por meio da união entre ciência, tecnologia e análise de dados,
                a NERA continua investigando os fenômenos relacionados à
                contaminação dos oceanos e às alterações provocadas pela crise.
                Cada amostra analisada, cada região monitorada e cada descoberta
                pode representar um passo em direção à recuperação do planeta.
              </p>
              <p>
                Acreditamos que preservar o futuro começa por compreender o
                presente. E, enquanto a chuva continuar caindo, continuaremos
                procurando uma maneira de fazê-la parar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
