import documento2 from "../../assets/documento2.jpg";

export default function Thalassa() {
  function abrirVideo() {
    const videoUrl = "https://youtu.be/-UmOPQRpRIE?si=rGZ5FLT1ERORe74z";
    window.open(videoUrl, "_blank");
  }

  return (
    <section className="admin-section">
      <div className="classified-warning">
        AVISO: AUTORIZAÇÃO DE NÍVEL 3 NECESSÁRIA
      </div>

      <h2>PROJETO TALASSA</h2>

      <div className="document-page">
        <div className="document-meta">
          DOCUMENT: TAL-0001 <br />
          CLASSIFICATION: TOP SECRET
        </div>
        <div className="document-content">
          <h3>PROJETO TALASSA</h3>

          <p>
            O Projeto TALASSA foi criado com o objetivo de desenvolver novas
            aplicações na área de regeneração celular e tratamento de doenças
            consideradas incuráveis.
          </p>
          <br />
          <p>
            Durante uma expedição científica em uma região profunda do oceano, a
            equipe de pesquisa identificou uma estrutura biológica desconhecida.
            Inicialmente considerada uma formação de origem geológica, a
            estrutura apresentou propriedades que não correspondiam a nenhum
            material previamente catalogado.
          </p>
          <br />
          <p>
            Após sua transferência para as instalações da NERA, foram
            identificadas respostas incomuns quando a estrutura era exposta a
            matéria viva. Testes posteriores demonstraram alterações
            significativas nos processos de regeneração celular.
          </p>
          <br />
          <p>
            Os resultados obtidos levaram à criação de um programa de pesquisa
            dedicado ao estudo e à aplicação controlada da estrutura,
            posteriormente registrada como Complexo Bioestrutural AB-14.
          </p>
          <br />
          <p>
            Com o avanço das pesquisas, novas alterações foram realizadas na
            estrutura original com o objetivo de aumentar sua estabilidade,
            eficiência e capacidade regenerativa.
          </p>
          <br />
          <p>
            Alguns resultados experimentais apresentaram comportamentos que não
            estavam presentes na amostra original. A natureza dessas alterações
            permanece sob investigação.
          </p>
          <br />
          <p>
            O Projeto TALASSA foi posteriormente encerrado e seus registros
            transferidos para o sistema interno da NERA.
          </p>
          <br />
          <p>
            <strong>CLASSIFICAÇÃO:</strong> CONFIDENCIAL
          </p>
          <br />
          <p>
            <strong>STATUS:</strong> PROJETO ENCERRADO
          </p>
          <br />
          <p>
            <strong>OBSERVAÇÃO:</strong> Documentos relacionados às etapas
            finais do projeto encontram-se indisponíveis.
          </p>
          <br />
          <p>
            <strong>%$%A chuva</strong> cairá sobre nós. O mar tomará o que
            deixamos para trás. E quando tudo estiver submerso, restará apenas
            uma pergunta: nós destruímos o oceano… ou apenas ensinamos a ele
            como nos destruir? @$%#%$¨%@#$$$$%$##@#@$%@¨@FR%T¨W$DF$%RTW%
          </p>
          <br />
          <h1>CLIQUE NO DOCUMENTO</h1>
          <article className="document-card" onClick={() => abrirVideo()}>
            <img src={documento2} alt="Documento 2" style={{ width: "100%" }} />
          </article>
          <section className="secao-reflexao">
            <h2>
              Reflexão: O oceano nos deu a vida. Cuidar dele ainda é uma escolha
              🌊
            </h2>
            <p>
              você ainda acha isso certo? O que você faria se tivesse a chance
              de mudar o rumo da história? O que você faria se tivesse a chance
              de salvar vidas? O que você faria se tivesse a chance de salvar o
              planeta? Refletir sobre nossas ações e suas consequências é
              essencial para construir um futuro mais consciente e sustentável.
              O oceano é um recurso vital para a vida na Terra, e sua
              preservação deve ser uma prioridade para todos nós.
            </p>

            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4l7Jns0u9Sg"
                title="Plástico nos oceanos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tVMe8baPGDA?si=eevCWqwOlpRie9pT"
                title="Plástico nos oceanos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5X_0xACN_48?si=I-Kcs4jqYnuBM8Mc"
                title="Plástico nos oceanos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
