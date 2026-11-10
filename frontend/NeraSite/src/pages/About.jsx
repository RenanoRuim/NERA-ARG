import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <Header />
      <main className="about-main">
        {/* Cabeçalho de Dossiê Institucional */}
        <section className="about-banner">
          <div className="about-banner-inner">
            <span className="about-kicker">
              PERFIL AUTÁRQUICO // REGISTRO INSTITUCIONAL N.E.R.A.
            </span>
            <h1>Sobre Nós — O Instituto N.E.R.A.</h1>
            <p className="about-subtitle">
              Núcleo de Estudos e Recuperação Ambiental: Ciência aplicada à
              contenção da crise hidrológica global e ao monitoramento de
              ecossistemas abissais.
            </p>
          </div>
        </section>

        <div className="about-container">
          {/* Bloco Principal: Texto Original Integral Preservado + Sidebar de Dados */}
          <section className="heroAbout-section">
            <div className="heroAbout-content">
              <div className="section-doc-header">
                <span className="mono-tag">
                  DOCUMENTO INSTITUCIONAL // MISSÃO E CONTEXTO CLIMÁTICO
                </span>
                <span className="doc-stamp">PÚBLICO</span>
              </div>

              <h2 className="welcomeAbout-text">
                Missão Científica e Emergência Ambiental
              </h2>

              <div className="heroAbout-description">
                <p>
                  A NERA é uma organização dedicada à pesquisa, ao monitoramento
                  e ao desenvolvimento de soluções voltadas à compreensão dos
                  oceanos e dos ambientes marinhos. Nosso trabalho busca
                  acompanhar as constantes transformações dos ecossistemas
                  oceânicos, analisando seus impactos sobre a biodiversidade, o
                  clima e a vida no planeta.
                </p>
                <p>
                  Nos últimos anos, entretanto, o mundo passou por mudanças que
                  ultrapassaram os limites dos problemas ambientais conhecidos.
                  Alterações incomuns na composição da água, fenômenos
                  climáticos extremos e a contaminação de diferentes regiões
                  passaram a representar uma ameaça direta à população. Entre
                  esses fenômenos, a chamada Chuva Tóxica tornou-se um dos
                  maiores desafios enfrentados pela humanidade.
                </p>
                <p>
                  A NERA trabalha para compreender as causas desse fenômeno e
                  desenvolver meios de reduzir seus efeitos. Nossos
                  pesquisadores monitoram a qualidade da água, as alterações
                  atmosféricas e as mudanças observadas nos ecossistemas
                  afetados, buscando identificar padrões que possam ajudar na
                  contenção da crise.
                </p>
                <p>
                  A situação atual exige mais do que respostas imediatas. A
                  contaminação ambiental provocou consequências que ainda não
                  somos capazes de compreender completamente, afetando
                  comunidades, animais e regiões inteiras. Diante de um mundo
                  que enfrenta uma crise sem precedentes, a pesquisa científica
                  tornou-se uma das nossas principais ferramentas para encontrar
                  uma solução.
                </p>
                <p>
                  Por meio da união entre ciência, tecnologia e análise de
                  dados, a NERA continua investigando os fenômenos relacionados
                  à contaminação dos oceanos e às alterações provocadas pela
                  crise. Cada amostra analisada, cada região monitorada e cada
                  descoberta pode representar um passo em direção à recuperação
                  do planeta.
                </p>
                <p>
                  Acreditamos que preservar o futuro começa por compreender o
                  presente. E, enquanto a chuva continuar caindo, continuaremos
                  procurando uma maneira de fazê-la parar.
                </p>
              </div>
            </div>

            <aside className="about-sidebar">
              <div className="sidebar-card">
                <span className="mono-tag">FICHA TÉCNICA DA AUTARQUIA</span>
                <h3>Dados Operacionais</h3>
                <dl className="inst-dl">
                  <div>
                    <dt>SIGLA OFICIAL</dt>
                    <dd>N.E.R.A.</dd>
                  </div>
                  <div>
                    <dt>DENOMINAÇÃO</dt>
                    <dd>Núcleo de Estudos e Recuperação Ambiental</dd>
                  </div>
                  <div>
                    <dt>JURISDIÇÃO</dt>
                    <dd>Bacia Atlântica & Unidades Costeiras</dd>
                  </div>
                  <div>
                    <dt>GRAU DE ALERTA ATUAL</dt>
                    <dd className="text-amber">NÍVEL ÂMBAR (CHUVA TÓXICA)</dd>
                  </div>
                  <div>
                    <dt>DECLARAÇÃO DE SEGURANÇA</dt>
                    <dd>
                      &ldquo;Todas as instalações operam dentro dos parâmetros
                      normativos, sem registro de acidentes graves nos últimos 5
                      anos.&rdquo;
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="sidebar-card dark-card">
                <span className="mono-tag">
                  DIVISÃO DE TECNOLOGIA (TI-NERA)
                </span>
                <h3>Padrão de Rede Interna (NERA-NET)</h3>
                <p>
                  Conforme a Instrução Normativa <code>IN-TI-04</code>, o
                  credenciamento de coordenadores no terminal{" "}
                  <strong>NERA-NET</strong> obedece estritamente à seguinte
                  sintaxe:
                </p>
                <div className="syntax-box">
                  <span>FORMATO DE USERNAME:</span>
                  <code>
                    [1ª Letra Nome][3 Letras Sobrenome]_[Unidade/Setor]
                  </code>
                  <small>
                    Ex.: Helena Vasconcelos (Unidade Sul) →{" "}
                    <strong>HVas_Sul</strong>
                  </small>
                </div>
                <div className="syntax-box">
                  <span>PIN DE CONTINGÊNCIA (LICENÇA MÉDICA):</span>
                  <code>[Nº do Laboratório][Nº do Subnível]</code>
                  <small>
                    Aplicável apenas a coordenadores-chefes com afastamento
                    ativo para consulta de relatórios Nível 1.
                  </small>
                </div>
              </div>
            </aside>
          </section>

          {/* Seção: Infraestrutura e Instalações de Pesquisa */}
          <section className="inst-facilities-section">
            <div className="section-title-block">
              <span className="mono-tag">
                REDE DE INFRAESTRUTURA CIENTÍFICA
              </span>
              <h2>Instalações & Complexos de Monitoramento</h2>
              <p>
                A estrutura física da N.E.R.A. é distribuída em complexos
                laboratoriais de superfície e unidades subterrâneas blindadas
                contra precipitação ácida.
              </p>
            </div>

            <div className="facilities-grid">
              <article className="facility-card">
                <div className="facility-top">
                  <span className="facility-code">UNIDADE: Para</span>
                  <span className="facility-status online">OPERACIONAL</span>
                </div>
                <h3>Unidade Regional Pará (Sede de Regeneração)</h3>
                <p>
                  Complexo laboratorial especializado em biologia celular
                  marinha e catalogação de amostras profundas. Abriga o{" "}
                  <strong>Laboratório 52 (Subnível 21)</strong>, núcleo central
                  das análises coordenadas pelo Dr. Edgar Charles.
                </p>
                <div className="facility-meta">
                  <span>CÓDIGO DE REDE: Para</span>
                  <span>SETOR PRINCIPAL: Lab 52 // Subnível 21</span>
                </div>
              </article>

              <article className="facility-card">
                <div className="facility-top">
                  <span className="facility-code">UNIDADE: Setor-22</span>
                  <span className="facility-status warning">RESTRITO</span>
                </div>
                <h3>Divisão de Química Marinha & Espectrometria</h3>
                <p>
                  Responsável pela avaliação de poluentes industriais, metais
                  pesados e polímeros sintéticos coletados em fossas oceânicas.
                  Operou sob supervisão direta do Dr. Manoel Duarte até a
                  Portaria Nº 22.
                </p>
                <div className="facility-meta">
                  <span>CÓDIGO DE SETOR: 22</span>
                  <span>AUDITORIA: Portaria Nº 22 (Retida)</span>
                </div>
              </article>

              <article className="facility-card">
                <div className="facility-top">
                  <span className="facility-code">UNIDADE: Setor-07</span>
                  <span className="facility-status offline">ISOLAMENTO</span>
                </div>
                <h3>Instalação Subterrânea de Contenção Costeira</h3>
                <p>
                  Estrutura autossuficiente de alta segurança projetada para
                  operações contínuas durante eventos severos. Comunicações
                  externas temporariamente redirecionadas após manutenção
                  elétrica em <code>24/12</code>.
                </p>
                <div className="facility-meta">
                  <span>PROTOCOLO: Anexo-A (24/12)</span>
                  <span>ACESSO: Autorização Nível 3</span>
                </div>
              </article>
            </div>
          </section>

          {/* Seção: Diretório Público de Pessoal Científico (Com Pistas para Nível 1 e 2) */}
          <section className="inst-directory-section">
            <div className="section-title-block">
              <span className="mono-tag">QUADRO FUNCIONAL PÚBLICO</span>
              <h2>Diretório de Coordenação Científica</h2>
              <p>
                Registro administrativo dos pesquisadores titulares vinculados
                às divisões oceanográficas da N.E.R.A.
              </p>
            </div>

            <div className="directory-table-wrapper">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th>REGISTRO</th>
                    <th>PESQUISADOR(A)</th>
                    <th>DIVISÃO / ALOCAÇÃO</th>
                    <th>CREDENCIAL DE REDE</th>
                    <th>SITUAÇÃO ADMINISTRATIVA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mono-cell">#001</td>
                    <td>
                      <strong>Dr. Edgar Charles</strong>
                      <span className="role-sub">
                        Pesquisador-Chefe — Regeneração Celular
                      </span>
                    </td>
                    <td>
                      Unidade <strong>Para</strong>
                      <span className="role-sub">
                        Laboratório <strong>52</strong> / Subnível{" "}
                        <strong>21</strong>
                      </span>
                    </td>
                    <td className="mono-cell">
                      <span
                        className="redacted-hint"
                        title="Padrão IN-TI-04: [1ª Letra Nome][3 Letras Sobrenome]_[Unidade]"
                      >
                        ECha_Para
                      </span>
                    </td>
                    <td>
                      <span className="status-pill leave">
                        LICENÇA MÉDICA (PIN CONTINGÊNCIA ATIVO)
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="mono-cell">#002</td>
                    <td>
                      <strong>Dra. Helena Vasconcelos</strong>
                      <span className="role-sub">
                        Análise Celular & Tecidos
                      </span>
                    </td>
                    <td>
                      Unidade Central
                      <span className="role-sub">Divisão Experimental</span>
                    </td>
                    <td className="mono-cell">HVas_Cent</td>
                    <td>
                      <span className="status-pill transferred">
                        TRANSFERIDA (EXPEDIÇÃO EXTERNA)
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="mono-cell">#003</td>
                    <td>
                      <strong>Dr. Manoel Duarte</strong>
                      <span className="role-sub">
                        Química Marinha & Amostras Abissais
                      </span>
                    </td>
                    <td>
                      Setor Químico <strong>22</strong>
                      <span className="role-sub">
                        Indexação Alfanumérica (A1Z26)
                      </span>
                    </td>
                    <td className="mono-cell">ManoDuar_22</td>
                    <td>
                      <span className="status-pill suspended">
                        VÍNCULO ENCERRADO (VER PORTARIA Nº 22)
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="mono-cell">#007</td>
                    <td>
                      <strong>Dra. Beatriz Almeida</strong>
                      <span className="role-sub">
                        Monitoramento de Efluentes e Água
                      </span>
                    </td>
                    <td>
                      Divisão de Controle Ambiental
                      <span className="role-sub">Estação Costeira</span>
                    </td>
                    <td className="mono-cell">BAlm_Cost</td>
                    <td>
                      <span className="status-pill suspended">
                        DESLIGADA ADMINISTRATIVAMENTE
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="directory-footer-note">
              <p>
                <strong>Nota da Ouvidoria:</strong> Pesquisadores em licença
                médica mantêm acesso de leitura ao Nível 1 da{" "}
                <Link to="/login">Intranet NERA-NET</Link> mediante uso do PIN
                padrão de localização física (<code>Lab + Subnível</code>). Para
                consultar os relatórios públicos e portarias de revisão, acesse
                a seção <Link to="/pesquisas">Pesquisas & Documentos</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
