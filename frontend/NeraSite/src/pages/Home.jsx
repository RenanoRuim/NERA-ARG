import { Link } from "react-router-dom";
import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import Noticias from "../components/Noticias";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        {/* SEC. 01 — Abertura Editorial & Carta Batimétrica */}
        <section className="editorial-hero">
          <div className="editorial-hero-grid">
            <div className="editorial-hero-left">
              <div className="editorial-meta-strip">
                <span>BOLETIM HIDROGRÁFICO OFICIAL // VOL. XIV</span>
                <span>ISSN 2941-AB14</span>
              </div>

              <h1>
                Núcleo de Estudos e Recuperação Ambiental
              </h1>

              <p className="editorial-subtitle">
                Monitoramento batimétrico de zonas abissais, controle químico da
                precipitação costeira e preservação de ecossistemas marinhos sob
                a Agenda 2030 (ODS-14).
              </p>

              <div className="archival-quote-sheet">
                <div className="quote-sheet-top">
                  <span>PREFÁCIO DO ARQUIVO CIENTÍFICO // N.E.R.A.</span>
                  <span className="stamp-inline">DESCLASSIFICADO</span>
                </div>
                <p className="hero-description">
                  O oceano sempre foi tratado como uma fonte de vida, mas pouco
                  se fala sobre aquilo que existe abaixo de sua superfície.
                  Durante anos, pesquisadores estudaram os efeitos da poluição,
                  das alterações químicas e dos resíduos descartados no ambiente
                  marinho. Alguns desses estudos foram interrompidos. Outros
                  nunca chegaram ao público...
                </p>
              </div>

              <div className="editorial-actions">
                <Link to="/centro-ods14" className="btn-archival-primary">
                  ACESSAR LABORATÓRIO NERA EDUCATION (5 SIMULADORES) →
                </Link>
                <Link to="/pesquisas" className="btn-archival-outline">
                  INSPECIONAR ARQUIVO DOCUMENTAL
                </Link>
              </div>
            </div>

            {/* Carta Batimétrica Vetorial (0m a -5.200m Setor 14) */}
            <aside
              className="bathymetric-chart-box"
              aria-label="Carta Batimétrica da Coluna d'Água"
            >
              <div className="chart-header">
                <span>FIG. 1.01 — PERFIL BATIMÉTRICO & COLUNA D&apos;ÁGUA</span>
                <span className="chart-coord">SETOR-14 // 04°12&apos;S</span>
              </div>

              <svg
                viewBox="0 0 460 280"
                className="bathymetric-svg"
                aria-label="Perfil de profundidade oceânica"
              >
                <rect width="460" height="280" fill="#071320" />
                {/* Linhas de Profundidade */}
                <line
                  x1="0"
                  y1="45"
                  x2="460"
                  y2="45"
                  stroke="#1e3a5f"
                  strokeDasharray="3 3"
                />
                <text
                  x="12"
                  y="38"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  0m — ZONA EPIPELÁGICA (Precipitação Ácida: pH 3.82)
                </text>

                <line
                  x1="0"
                  y1="105"
                  x2="460"
                  y2="105"
                  stroke="#1e3a5f"
                  strokeDasharray="3 3"
                />
                <text
                  x="12"
                  y="98"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  -200m — ZONA MESOPELÁGICA (Acúmulo de Microplásticos)
                </text>

                <line
                  x1="0"
                  y1="175"
                  x2="460"
                  y2="175"
                  stroke="#1e3a5f"
                  strokeDasharray="3 3"
                />
                <text
                  x="12"
                  y="168"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  -1.000m — ZONA BATIPELÁGICA (Sedimentação de Metais Pesados)
                </text>

                {/* Relevos do Talude e Fossa Abissal */}
                <path
                  d="M 0 80 L 90 95 L 160 155 L 230 185 L 285 255 L 365 255 L 415 160 L 460 150 L 460 280 L 0 280 Z"
                  fill="#0f2338"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />

                {/* Marcador de Anomalia na Fossa (-4.000m a -5.200m) */}
                <circle
                  cx="325"
                  cy="242"
                  r="7"
                  fill="rgba(239, 68, 68, 0.25)"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                />
                <circle cx="325" cy="242" r="2.5" fill="#ef4444" />
                <line
                  x1="325"
                  y1="235"
                  x2="325"
                  y2="50"
                  stroke="#ef4444"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
                <text
                  x="195"
                  y="272"
                  fill="#fca5a5"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  FOSSA SETOR-14 (-5.200m) // ORIGEM BIOESTRUTURAL AB-14
                </text>
              </svg>

              <div className="chart-telemetry-table">
                <div>
                  <span>PRECIPITAÇÃO TÓXICA</span>
                  <strong className="warn">pH 3.82 (CRÍTICO)</strong>
                </div>
                <div>
                  <span>UNIDADE PARÁ</span>
                  <strong>LAB-52 / SUB-21</strong>
                </div>
                <div>
                  <span>SETOR QUÍMICO 22</span>
                  <strong className="warn">PORTARIA Nº 22</strong>
                </div>
                <div>
                  <span>AUDITORIA 24/12</span>
                  <strong className="danger">ANEXO-A [SELADO]</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SEC. 02 — Grade Assimétrica: Diário Oficial + Laboratório NERA Education */}
        <section className="home-container">
          <div className="editorial-two-col">
            {/* Coluna Esquerda: Despachos e Portarias */}
            <div className="official-gazette-panel">
              <div className="panel-index-bar">
                <span>SEC. 02 // DIÁRIO OFICIAL DA AUTARQUIA</span>
                <span>ATUALIZAÇÃO CONTÍNUA</span>
              </div>

              <h2>Despachos Administrativos & Portarias Vigentes</h2>

              <div className="gazette-entries">
                <article className="gazette-item">
                  <div className="gazette-meta">
                    <span className="gazette-code">PORTARIA Nº 22</span>
                    <span className="gazette-dept">
                      SETOR DE QUÍMICA MARINHA (UNIDADE 22)
                    </span>
                  </div>
                  <h3>
                    Retenção do Estudo sobre Contaminação na Fossa Abissal
                  </h3>
                  <p>
                    O relatório conduzido pelo{" "}
                    <strong>Dr. Manoel Duarte (<code>ManoDuar_22</code>)</strong>{" "}
                    sobre a reação entre resíduos industriais e estruturas
                    abissais teve seu título original suprimido por ordem do
                    Conselho Diretor.
                  </p>
                  <Link to="/pesquisas" className="gazette-link">
                    Consultar processo e errata técnica →
                  </Link>
                </article>

                <article className="gazette-item">
                  <div className="gazette-meta">
                    <span className="gazette-code">MEMORANDO TI-08</span>
                    <span className="gazette-dept">
                      UNIDADE REGIONAL PARÁ (LAB 52 // SUBNÍVEL 21)
                    </span>
                  </div>
                  <h3>
                    Protocolo de Credenciamento em Licença Médica
                  </h3>
                  <p>
                    Durante o afastamento do coordenador-chefe{" "}
                    <strong>Dr. Edgar Charles</strong>, o acesso de leitura aos
                    relatórios de Nível 1 na NERA-NET permanece vinculado ao
                    código da Unidade Pará e ao PIN numérico de sua alocação
                    física.
                  </p>
                  <Link to="/about" className="gazette-link">
                    Verificar Diretório de Coordenação →
                  </Link>
                </article>

                <article className="gazette-item">
                  <div className="gazette-meta">
                    <span className="gazette-code">NOTA OFICIAL #019</span>
                    <span className="gazette-dept">
                      BUNKER DE CONTENÇÃO COSTEIRA // EVENTO 24/12
                    </span>
                  </div>
                  <h3>
                    Esclarecimento sobre o Apagão na Véspera de Natal (24/12)
                  </h3>
                  <p>
                    A Diretoria nega que a queda de energia de{" "}
                    <code>24/12</code> tenha durado onze minutos ou liberado
                    partículas atmosféricas. A fita de auditoria encontra-se
                    arquivada sob o protocolo <code>Anexo-A</code>.
                  </p>
                  <Link to="/centro-ods14" className="gazette-link">
                    Auditar fita de sensores no Módulo 05 →
                  </Link>
                </article>
              </div>
            </div>

            {/* Coluna Direita: Chamada para os 5 Simuladores da NERA Education */}
            <aside className="education-spotlight-panel">
              <div className="panel-index-bar dark">
                <span>SEC. 03 // DIVULGAÇÃO CIENTÍFICA</span>
                <span>INTERATIVO</span>
              </div>

              <div className="spotlight-body">
                <span className="spotlight-kicker">
                  PROGRAMA PÚBLICO NERA EDUCATION
                </span>
                <h2>Simuladores Oceanográficos & Monitoramento ODS-14</h2>
                <p>
                  Opere instrumentos virtuais conectados aos sensores de campo
                  da N.E.R.A. para investigar o ciclo hidrológico da Chuva
                  Tóxica, analisar amostras químicas e escutar hidrofones de
                  profundidade:
                </p>

                <ul className="simulator-index-list">
                  <li>
                    <span>MÓD. 01</span>
                    <div>
                      <strong>Simulador do Ciclo da Água & Evaporação</strong>
                      <small>Dinâmica de precipitação ácida e Fossa Setor-14</small>
                    </div>
                  </li>
                  <li>
                    <span>MÓD. 02</span>
                    <div>
                      <strong>Espectrômetro de Amostras (Setor Químico 22)</strong>
                      <small>Ensaios de poluentes e Amostra Retida #14-AB</small>
                    </div>
                  </li>
                  <li>
                    <span>MÓD. 03</span>
                    <div>
                      <strong>Receptor Acústico & Sonar Batimétrico</strong>
                      <small>Escuta abissal de hidrofones até -5.200m</small>
                    </div>
                  </li>
                  <li>
                    <span>MÓD. 04</span>
                    <div>
                      <strong>Chave Taxonômica & Morfologia Abissal</strong>
                      <small>Identificação biológica e registro da Calamidade</small>
                    </div>
                  </li>
                  <li>
                    <span>MÓD. 05</span>
                    <div>
                      <strong>Auditoria de Telemetria (Noite de 24/12)</strong>
                      <small>Comparação entre Nota #019 e Fita Bruta</small>
                    </div>
                  </li>
                </ul>

                <Link to="/centro-ods14" className="btn-archival-primary full">
                  ABRIR BANCADA DE SIMULAÇÃO NERA EDUCATION →
                </Link>
              </div>
            </aside>
          </div>

          {/* SEC. 04 — Observatório de Notícias via RSS preservado */}
          <Noticias />
        </section>
      </main>
      <Footer />
    </>
  );
}
