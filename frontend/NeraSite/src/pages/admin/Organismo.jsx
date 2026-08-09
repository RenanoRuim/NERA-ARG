import documento1 from "../../assets/documento1.jpg";
import { useState } from "react";
export default function Organismo() {
  const [documentoAberto, setDocumentoAberto] = useState(false);
  return (
    <section className="admin-section">
      <h2>BIOLOGICAL DATABASE</h2>

      <div className="document-grid">
        <article className="document-card">
          <h3>Origem</h3>

          <p>
            A primeira amostra do Complexo Bioestrutural AB-14 foi localizada
            durante uma expedição em uma região profunda do oceano.
          </p>
          <br />
          <p>
            A localização exata da descoberta permanece restrita aos
            pesquisadores autorizados pelo Projeto TALASSA.
          </p>
        </article>
        <article className="document-card">
          <h3>Comportamento</h3>

          <p>
            Em condições isoladas, o Complexo Bioestrutural AB-14 permanece
            completamente inerte.
          </p>
          <br />
          <p>
            Quando exposto a matéria viva, entretanto, apresenta alterações
            estruturais que ainda não foram completamente compreendidas.
          </p>
          <br />
          <p>
            A intensidade da resposta varia de acordo com o tipo de tecido
            utilizado.
          </p>
        </article>
        <article className="document-card">
          <h3>Regeneração</h3>

          <p>
            Testes iniciais demonstraram que o Complexo Bioestrutural AB-14 é
            capaz de induzir processos acelerados de regeneração em tecidos
            humanos.
          </p>
          <br />
          <p>
            Ferimentos considerados graves apresentaram recuperação em períodos
            significativamente inferiores aos padrões conhecidos.
          </p>
          <br />
          <p>
            Os mecanismos responsáveis pelo processo permanecem desconhecidos.
          </p>
        </article>
        <article className="document-card">
          <h3>Reação Biológica</h3>

          <p>
            A exposição do Complexo Bioestrutural AB-14 a tecidos humanos
            provoca um aumento imediato em sua atividade.
          </p>
          <br />
          <p>
            Testes realizados com tecidos de outras espécies não apresentaram
            respostas equivalentes.
          </p>
          <br />
          <p>
            A razão pela qual o complexo demonstra preferência por matéria
            humana ainda não foi determinada.
          </p>
        </article>
        <article className="document-card">
          <h3>Estabilidade</h3>

          <p>
            A amostra apresenta elevada resistência a condições ambientais
            adversas.
          </p>
          <br />
          <p>
            Alterações de temperatura, pressão e composição química não foram
            suficientes para destruir sua estrutura.
          </p>
          <br />
          <p>
            Tentativas de desativação permanente permanecem sem resultados
            conclusivos.
          </p>
        </article>

        <article className="document-card">
          <h3>Estabilidade</h3>

          <p>
            A amostra apresenta elevada resistência a condições ambientais
            adversas.
          </p>
          <br />
          <p>
            Alterações de temperatura, pressão e composição química não foram
            suficientes para destruir sua estrutura.
          </p>
          <br />
          <p>
            Tentativas de desativação permanente permanecem sem resultados
            conclusivos.
          </p>
        </article>
        <article className="document-card">
          <h3>Contenção</h3>

          <p>
            O Complexo Bioestrutural AB-14 deve permanecer armazenado em
            ambiente isolado e monitorado continuamente.
          </p>
          <br />
          <p>
            Qualquer alteração nos níveis de atividade da amostra deverá ser
            comunicada imediatamente ao setor de segurança.
          </p>
          <br />
          <p>
            O acesso ao complexo é permitido somente a pesquisadores
            autorizados.
          </p>
        </article>
        <article className="document-card">
          <h3>Classificação de Risco</h3>

          <p>
            A classificação atual do Complexo Bioestrutural AB-14 permanece
            indefinida devido à ausência de dados suficientes sobre suas
            capacidades.
          </p>
          <br />
          <p>
            Os efeitos observados até o momento não representam necessariamente
            todos os riscos associados à exposição.
          </p>
          <br />
          <p>
            <strong>Recomendação:</strong> evitar contato direto com a amostra
            em qualquer circunstância.
          </p>
        </article>
        <article className="document-card">
          <h3>Perigo</h3>

          <p>
            O Complexo Bioestrutural AB-14 não apresenta metabolismo próprio,
            não realiza divisão celular e não pode ser classificado como vírus,
            bactéria ou fungo.
          </p>
          <br />
          <p>
            Apesar de sua aparente inatividade, o complexo apresenta respostas
            anômalas quando exposto a matéria orgânica, especialmente tecidos de
            origem humana.
          </p>
          <br />
          <p>
            O nível de risco permanece indeterminado. Manipulações sem
            autorização são estritamente proibidas.
          </p>
        </article>
        <article
          className="document-card"
          onClick={() => setDocumentoAberto(true)}
        >
          <img src={documento1} alt="Documento 1" style={{ width: "100%" }} />
        </article>
        {documentoAberto && (
          <div
            className="documento-modal"
            onClick={() => setDocumentoAberto(false)}
          >
            <div
              className="documento-expandido"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fechar-documento"
                onClick={() => setDocumentoAberto(false)}
              >
                ×
              </button>

              <img src={documento1} alt="Documento ampliado" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
