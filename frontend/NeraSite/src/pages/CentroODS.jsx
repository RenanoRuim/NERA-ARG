import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import "../styles/CentroODS.css";

// Mensagem da Sonda no Setor 14 cifrada em Cifra de César (+14)
// Texto original (Shift 14 para decodificar):
// "SONDA AB-14: O MATERIAL RESPONDEU AO SONAR IMITANDO BATIMENTOS HUMANOS. A CHUVA CARREGA OS ESPOROS. PROTOCOLO DE NATAL: 2412A"
const TEXTO_SONAR_ORIGINAL =
  "SONDA AB-14: O MATERIAL RESPONDEU AO SONAR IMITANDO BATIMENTOS HUMANOS. A CHUVA CARREGA OS ESPOROS. PROTOCOLO DE NATAL: 2412A";

function cifrarCesar(texto, deslocamento) {
  return texto
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + deslocamento) % 26) + 65);
      }
      return char;
    })
    .join("");
}

const TRANSMISSAO_CIFRADA = cifrarCesar(TEXTO_SONAR_ORIGINAL, 12); // Decodifica quando o jogador soma +14 (12 + 14 = 26 ≡ 0)

const AMOSTRAS_ESPECTROMETRO = {
  A: {
    id: "AMOSTRA-A",
    nome: "Amostra A — Reserva Costeira Presenvada (50m)",
    ph: "8.1 (Alcalino Normal)",
    poluentes: "0.02 mg/L (Traços Naturais)",
    reacaoHumana: "Nenhuma alteração celular observada.",
    classificacaoCorreta: "limpa",
    explicacao:
      "Água marinha saudável tem pH levemente alcalino (~8.1) e alta taxa de oxigênio dissolvido, sustentando recifes de coral.",
  },
  B: {
    id: "AMOSTRA-B",
    nome: "Amostra B — Giro Subtropical de Correntes (Superfície)",
    ph: "7.8 (Leve Acidificação)",
    poluentes: "48.5 mg/L (Polímeros PET / Microplásticos)",
    reacaoHumana: "Bioacumulação tóxica lenta e inflamação tecidual.",
    classificacaoCorreta: "microplastico",
    explicacao:
      "Microplásticos absorvem poluentes orgânicos persistentes (POPs) e entram na cadeia alimentar marinha e humana.",
  },
  C: {
    id: "AMOSTRA-C",
    nome: "Amostra C — Estuário Industrial Descartado (200m)",
    ph: "6.4 (Ácido / Contaminado)",
    poluentes: "112.0 mg/L (Mercúrio, Cádmio e Chumbo)",
    reacaoHumana: "Necrose celular aguda e dano neurológico severo.",
    classificacaoCorreta: "metais",
    explicacao:
      "Metais pesados descartados pela indústria afundam no sedimento marinho e provocam mutações e mortandade na fauna bentônica.",
  },
  AB14: {
    id: "AMOSTRA #14-AB",
    nome: "Amostra Retida #14-AB — Fossa Abissal Setor 14 (Coleta Dr. Manoel Duarte)",
    ph: "VARIÁVEL (Reage ao observador)",
    poluentes: "SATURAÇÃO POLIMÉRICA + ESTRUTURA NÃO-CATALOGADA",
    reacaoHumana:
      "ALERTA CRÍTICO: Reorganização epitelial acelerada (999%). Substituição de tecido humano por morfologia marinha abissal.",
    classificacaoCorreta: "anomalia",
    explicacao:
      "Em água pura permanece inerte. Em contato com poluição marinha e tecido humano, exibe comportamento consciente e reescreve as células do hospedeiro.",
  },
};

const LINHAS_TELEMETRIA = [
  {
    id: "L1",
    horario: "24/12 — 02:05",
    sensor: "Subestação Principal — Tensão de Rede",
    relatorioPublico: "Operação nominal (220V / 60Hz Estável).",
    fitaBruta: "Operação nominal (220V / 60Hz Estável).",
    contradicao: false,
  },
  {
    id: "L2",
    horario: "24/12 — 02:11 às 02:22",
    sensor: "Gerador de Contenção Subterrânea",
    relatorioPublico:
      "Interrupção programada de 30 segundos para teste de rotina (Nota Oficial #019).",
    fitaBruta:
      "QUEDA TOTAL DE ENERGIA POR 11 MINUTOS. Trava magnética do Tanque AB-14 desenergizada.",
    contradicao: true,
  },
  {
    id: "L3",
    horario: "24/12 — 02:14 às 02:17",
    sensor: "Circuito Fechado de Câmeras (CFTV Lab-52)",
    relatorioPublico: "Gravação contínua sem intercorrências visuais.",
    fitaBruta:
      "PERDA DE SINAL DE VÍDEO POR 3 MINUTOS. Ruído eletromagnético intenso no corredor de contenção.",
    contradicao: true,
  },
  {
    id: "L4",
    horario: "24/12 — 02:15",
    sensor: "Tanque Principal AB-14 & Duto de Exaustão",
    relatorioPublico: "Amostra contida e estanque. Válvulas fechadas.",
    fitaBruta:
      "PRESSÃO CAIU A 0 PSI. Evaporação biológica massiva detectada nas chaminés atmosféricas.",
    contradicao: true,
  },
  {
    id: "L5",
    horario: "24/12 — 02:25",
    sensor: "Terminal Biométrico — Corredor de Saída",
    relatorioPublico: "Turno encerrado normalmente.",
    fitaBruta:
      "Turno encerrado. Registro biométrico #09 (Ryan_Michael) detectado com mutação contida.",
    contradicao: false,
  },
];

export default function CentroODS() {
  const [moduloAtivo, setModuloAtivo] = useState(1);

  // Caderno de Campo persistido no localStorage
  const [descobertas, setDescobertas] = useState(() => {
    try {
      const salvo = localStorage.getItem("nera_descobertas");
      return salvo ? JSON.parse(salvo) : {};
    } catch {
      return {};
    }
  });

  function registrarDescoberta(chave, dados) {
    setDescobertas((prev) => {
      if (prev[chave]) return prev;
      const novo = { ...prev, [chave]: dados };
      try {
        localStorage.setItem("nera_descobertas", JSON.stringify(novo));
      } catch {
        // Ignora erro de storage
      }
      return novo;
    });
  }

  // --- ESTADOS DO MÓDULO 1: CICLO DA ÁGUA ---
  const [poluicaoCiclo, setPoluicaoCiclo] = useState(20);
  const [tempCiclo, setTempCiclo] = useState(24);
  const [profundidadeCiclo, setProfundidadeCiclo] = useState("50m");
  const [simulacaoCicloRodada, setSimulacaoCicloRodada] = useState(false);

  const anomaliaCicloAtiva =
    simulacaoCicloRodada &&
    profundidadeCiclo === "4000m" &&
    Number(poluicaoCiclo) === 100;

  function executarSimulacaoCiclo() {
    setSimulacaoCicloRodada(true);
    if (profundidadeCiclo === "4000m" && Number(poluicaoCiclo) === 100) {
      registrarDescoberta("mod1", {
        titulo: "Vetor Hidrológico AB-14 & Credencial Nível 1",
        resumo:
          "O AB-14 evapora da Fossa Abissal (Setor 14) quando saturado por poluição. Log de Beatriz Almeida aponta para Edgar Charles (ECha_Para // PIN: 5221).",
      });
    }
  }

  // --- ESTADOS DO MÓDULO 2: ESPECTRÔMETRO QUÍMICO ---
  const [amostraSelecionada, setAmostraSelecionada] = useState("A");
  const [reagenteAtivo, setReagenteAtivo] = useState("ph");
  const [tentativaPalavra, setTentativaPalavra] = useState("");
  const [cifra22Resolvida, setCifra22Resolvida] = useState(false);

  function verificarCifraSetor22(valor) {
    setTentativaPalavra(valor);
    const limpo = valor
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");

    if (limpo === "POLUICAO") {
      setCifra22Resolvida(true);
      registrarDescoberta("mod2", {
        titulo: "Chave Química Setor 22 (Nível 2 Desbloqueado)",
        resumo:
          "Palavra-chave censurada: POLUICAO → Cifra A1Z26: 1615122193115 (Usuário: ManoDuar_22).",
      });
    }
  }

  // --- ESTADOS DO MÓDULO 3: SONAR BATIMÉTRICO ---
  const [freqSonar, setFreqSonar] = useState("120");
  const [profSonar, setProfSonar] = useState("100");
  const [shiftCesar, setShiftCesar] = useState(0);
  const [audioSonarAtivo, setAudioSonarAtivo] = useState(false);

  const sinalAbissalAtivo = freqSonar === "1400" && profSonar === "5200";
  const textoDecodificadoSonar = cifrarCesar(
    TRANSMISSAO_CIFRADA,
    Number(shiftCesar),
  );
  const sonarDecodificadoSucesso =
    sinalAbissalAtivo && Number(shiftCesar) === 14;

  function atualizarShiftSonar(novoShift) {
    setShiftCesar(novoShift);
    if (sinalAbissalAtivo && Number(novoShift) === 14) {
      registrarDescoberta("mod3", {
        titulo: "Transmissão Sonda AB-14 (Shift +14)",
        resumo:
          "O AB-14 imita batimentos cardíacos humanos em 1.400 Hz. Edgar Charles referencia o Protocolo de Natal: 2412a.",
      });
    }
  }

  function emitirPulsoAcustico() {
    setAudioSonarAtivo(true);
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = sinalAbissalAtivo ? "sawtooth" : "sine";
      osc.frequency.setValueAtTime(
        sinalAbissalAtivo ? 140 : Number(freqSonar),
        ctx.currentTime,
      );
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Ignora caso navegador bloqueie áudio
    }
  }

  // --- ESTADOS DO MÓDULO 4: TAXONOMIA & CALAMIDADE ---
  const [taxMetabolismo, setTaxMetabolismo] = useState("presente");
  const [taxDivisao, setTaxDivisao] = useState("mitose");
  const [taxReino, setTaxReino] = useState("animalia");
  const [taxReacao, setTaxReacao] = useState("neutra");
  const [laudoTaxonomico, setLaudoTaxonomico] = useState(null);

  function analisarEspecime() {
    if (
      taxMetabolismo === "ausente" &&
      taxDivisao === "ausente" &&
      taxReino === "incompativel" &&
      taxReacao === "mutacao_marinha"
    ) {
      setLaudoTaxonomico("calamidade");
      registrarDescoberta("mod4", {
        titulo: "Dossiê da Calamidade & Prontuário #09",
        resumo:
          "O contato com a Chuva Tóxica transforma humanos em criaturas marinhas. O indivíduo #09 (Ryan_Michael) é o único resistente.",
      });
    } else {
      setLaudoTaxonomico("comum");
    }
  }

  // --- ESTADOS DO MÓDULO 5: AUDITORIA 24/12 ---
  const [linhasMarcadas, setLinhasMarcadas] = useState([]);
  const [auditoriaConcluida, setAuditoriaConcluida] = useState(false);
  const [erroAuditoria, setErroAuditoria] = useState("");

  function alternarLinha(id) {
    setErroAuditoria("");
    setLinhasMarcadas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  function validarAuditoria2412() {
    const corretas = ["L2", "L3", "L4"];
    const acertouTodas =
      linhasMarcadas.length === 3 &&
      corretas.every((id) => linhasMarcadas.includes(id));

    if (acertouTodas) {
      setAuditoriaConcluida(true);
      setErroAuditoria("");
      registrarDescoberta("mod5", {
        titulo: "Auditoria 24/12 — Chave de Nível 3 (2412a)",
        resumo:
          "Confirmado apagão de 11 minutos e liberação atmosférica do AB-14 em 24/12. Credencial Nível 3: Ryan_Michael // Senha: 2412a.",
      });
    } else {
      setErroAuditoria(
        "Seleção incorreta. Marque exatamente as 3 linhas em que a Fita Bruta contradiz a Nota Oficial #019.",
      );
    }
  }

  const totalDescobertas = Object.keys(descobertas).length;

  return (
    <>
      <Header />
      <main className="edu-main">
        {/* Cabeçalho Editorial da Divisão NERA Education */}
        <section className="edu-masthead">
          <div className="edu-masthead-inner">
            <div className="edu-masthead-left">
              <span className="edu-doc-index">
                SEC. 04 // PROGRAMA PÚBLICO DE DIVULGAÇÃO CIENTÍFICA & ODS-14
              </span>
              <h1>NERA Education — Laboratório Aberto de Oceanografia</h1>
              <p className="edu-lead">
                Plataforma interativa de simulação hidrológica, análise química,
                bioacústica e conservação marinha. Todos os instrumentos abaixo
                são alimentados pela rede de sensores das estações costeiras da
                N.E.R.A.
              </p>
            </div>

            <aside className="edu-logbook-box">
              <div className="logbook-header">
                <span>CADERNO DE CAMPO (ANOMALIAS DETECTADAS)</span>
                <strong>{totalDescobertas} / 5</strong>
              </div>
              {totalDescobertas === 0 ? (
                <p className="logbook-empty">
                  Nenhuma anomalia registrada. Opere os 5 simuladores abaixo e
                  investigue parâmetros fora do padrão público.
                </p>
              ) : (
                <ul className="logbook-list">
                  {Object.entries(descobertas).map(([key, item]) => (
                    <li key={key}>
                      <strong>✓ {item.titulo}:</strong> {item.resumo}
                    </li>
                  ))}
                </ul>
              )}
              <div className="logbook-footer">
                <Link to="/login" className="logbook-login-link">
                  Testar credenciais descobertas no NERA-NET →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <div className="edu-container">
          {/* Barra Seletora dos 5 Instrumentos Científicos */}
          <section className="edu-workbench">
            <div className="workbench-Header">
              <div>
                <span className="mono-tag">
                  BANCADA DE SIMULAÇÃO CIENTÍFICA // 5 MÓDULOS OPERACIONAIS
                </span>
                <h2>Instrumentos Interativos de Pesquisa Marinha</h2>
              </div>
              <span className="workbench-warning">
                AVISO TÉCNICO: Sincronização direta com a Boia Abissal Setor-14
                ativa.
              </span>
            </div>

            <nav className="module-selector-tabs" aria-label="Módulos NERA Education">
              <button
                type="button"
                className={moduloAtivo === 1 ? "mod-tab active" : "mod-tab"}
                onClick={() => setModuloAtivo(1)}
              >
                <span className="mod-num">MÓDULO 01</span>
                <strong>Ciclo da Água & Chuva</strong>
                {descobertas.mod1 && <span className="mod-solved-dot">●</span>}
              </button>

              <button
                type="button"
                className={moduloAtivo === 2 ? "mod-tab active" : "mod-tab"}
                onClick={() => setModuloAtivo(2)}
              >
                <span className="mod-num">MÓDULO 02</span>
                <strong>Espectrômetro de Água</strong>
                {descobertas.mod2 && <span className="mod-solved-dot">●</span>}
              </button>

              <button
                type="button"
                className={moduloAtivo === 3 ? "mod-tab active" : "mod-tab"}
                onClick={() => setModuloAtivo(3)}
              >
                <span className="mod-num">MÓDULO 03</span>
                <strong>Sonar Batimétrico</strong>
                {descobertas.mod3 && <span className="mod-solved-dot">●</span>}
              </button>

              <button
                type="button"
                className={moduloAtivo === 4 ? "mod-tab active" : "mod-tab"}
                onClick={() => setModuloAtivo(4)}
              >
                <span className="mod-num">MÓDULO 04</span>
                <strong>Atlas Taxonômico</strong>
                {descobertas.mod4 && <span className="mod-solved-dot">●</span>}
              </button>

              <button
                type="button"
                className={moduloAtivo === 5 ? "mod-tab active" : "mod-tab"}
                onClick={() => setModuloAtivo(5)}
              >
                <span className="mod-num">MÓDULO 05</span>
                <strong>Auditoria de Sensores</strong>
                {descobertas.mod5 && <span className="mod-solved-dot">●</span>}
              </button>
            </nav>

            {/* =========================================================
                MÓDULO 01: SIMULADOR DO CICLO HIDROLÓGICO
               ========================================================= */}
            {moduloAtivo === 1 && (
              <div className="module-stage">
                <div className="module-stage-grid">
                  <div className="module-controls-col">
                    <span className="mono-tag">
                      HIDROLOGIA COSTEIRA // SIMULADOR DE EVAPORAÇÃO E CHUVA
                    </span>
                    <h3>Módulo 01: Dinâmica do Ciclo da Água e Poluentes</h3>
                    <p className="module-pedagogy">
                      <strong>Objetivo Educativo:</strong> Compreender como o
                      aquecimento das águas e o descarte de resíduos químicos no
                      oceano alteram o pH da evaporação e geram precipitação
                      ácida sobre o continente.
                    </p>

                    <div className="control-field">
                      <label htmlFor="slider-poluicao">
                        1. Taxa de Poluição Marinha / Descarte Industrial:{" "}
                        <strong>{poluicaoCiclo}%</strong>
                      </label>
                      <input
                        id="slider-poluicao"
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={poluicaoCiclo}
                        onChange={(e) => {
                          setPoluicaoCiclo(e.target.value);
                          setSimulacaoCicloRodada(false);
                        }}
                      />
                    </div>

                    <div className="control-field">
                      <label htmlFor="slider-temp">
                        2. Temperatura de Evaporação Superficial:{" "}
                        <strong>{tempCiclo} °C</strong>
                      </label>
                      <input
                        id="slider-temp"
                        type="range"
                        min="16"
                        max="40"
                        step="2"
                        value={tempCiclo}
                        onChange={(e) => {
                          setTempCiclo(e.target.value);
                          setSimulacaoCicloRodada(false);
                        }}
                      />
                    </div>

                    <div className="control-field">
                      <label htmlFor="select-prof">
                        3. Zona de Captação da Coluna d&apos;Água:
                      </label>
                      <select
                        id="select-prof"
                        value={profundidadeCiclo}
                        onChange={(e) => {
                          setProfundidadeCiclo(e.target.value);
                          setSimulacaoCicloRodada(false);
                        }}
                      >
                        <option value="50m">
                          Zona Epipelágica (50m — Superfície Solar)
                        </option>
                        <option value="500m">
                          Zona Mesopelágica (500m — Crepuscular)
                        </option>
                        <option value="4000m">
                          Zona Abissal (4.000m — Fossa Setor 14 [RESTRITO])
                        </option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn-execute-sim"
                      onClick={executarSimulacaoCiclo}
                    >
                      EXECUTAR SIMULAÇÃO HIDROLÓGICA →
                    </button>
                  </div>

                  {/* Visor Gráfico SVG do Ciclo da Água */}
                  <div className="module-display-col">
                    <div
                      className={
                        anomaliaCicloAtiva
                          ? "hydro-visor anomaly"
                          : "hydro-visor"
                      }
                    >
                      <div className="visor-top-bar">
                        <span>DIAGRAMA DE CORTE: OCEANO ↔ ATMOSFERA</span>
                        <span>
                          STATUS:{" "}
                          {anomaliaCicloAtiva
                            ? "ALERTA BIOESTRUTURAL AB-14"
                            : "SIMULAÇÃO PADRÃO"}
                        </span>
                      </div>

                      <svg
                        viewBox="0 0 500 240"
                        className="hydro-svg"
                        aria-label="Diagrama do Ciclo Hidrológico"
                      >
                        {/* Céu / Atmosfera */}
                        <rect
                          x="0"
                          y="0"
                          width="500"
                          height="110"
                          fill={anomaliaCicloAtiva ? "#1f1013" : "#0d2136"}
                        />
                        {/* Nuvens */}
                        <ellipse
                          cx="140"
                          cy="40"
                          rx="65"
                          ry="22"
                          fill={anomaliaCicloAtiva ? "#5c1f24" : "#334e68"}
                        />
                        <ellipse
                          cx="360"
                          cy="42"
                          rx="75"
                          ry="24"
                          fill={anomaliaCicloAtiva ? "#6e232a" : "#486581"}
                        />
                        {/* Setas de Evaporação */}
                        <path
                          d="M120 155 L120 70 M155 155 L155 70"
                          stroke={anomaliaCicloAtiva ? "#ef4444" : "#38bdf8"}
                          strokeWidth="2"
                          strokeDasharray="4 3"
                        />
                        <text
                          x="60"
                          y="102"
                          fill="#cbd5e1"
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          1. EVAPORAÇÃO
                        </text>
                        {/* Chuva / Precipitação */}
                        <path
                          d="M335 70 L320 140 M360 70 L345 140 M385 70 L370 140"
                          stroke={
                            anomaliaCicloAtiva
                              ? "#f87171"
                              : Number(poluicaoCiclo) > 60
                                ? "#fbbf24"
                                : "#38bdf8"
                          }
                          strokeWidth="2.2"
                        />
                        <text
                          x="305"
                          y="102"
                          fill={anomaliaCicloAtiva ? "#fca5a5" : "#cbd5e1"}
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          {anomaliaCicloAtiva
                            ? "2. CHUVA TÓXICA (AB-14)"
                            : "2. PRECIPITAÇÃO"}
                        </text>
                        {/* Continente Costeiro */}
                        <polygon
                          points="290,140 500,140 500,240 240,240"
                          fill="#1e293b"
                          stroke="#475569"
                        />
                        <text
                          x="345"
                          y="175"
                          fill="#94a3b8"
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          ZONA COSTEIRA / BUNKER
                        </text>
                        {/* Oceano e Fossa Abissal */}
                        <rect
                          x="0"
                          y="140"
                          width="290"
                          height="100"
                          fill={anomaliaCicloAtiva ? "#2b0c10" : "#071626"}
                        />
                        <text
                          x="16"
                          y="165"
                          fill="#38bdf8"
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          SUPERFÍCIE MARINHA (Poluição: {poluicaoCiclo}%)
                        </text>
                        <line
                          x1="0"
                          y1="200"
                          x2="265"
                          y2="200"
                          stroke="#334155"
                          strokeDasharray="3 3"
                        />
                        <text
                          x="16"
                          y="222"
                          fill={
                            profundidadeCiclo === "4000m"
                              ? "#f87171"
                              : "#64748b"
                          }
                          fontSize="9"
                          fontFamily="monospace"
                        >
                          FOSSA ABISSAL SETOR-14 (-4.000m)
                        </text>
                      </svg>

                      {simulacaoCicloRodada && !anomaliaCicloAtiva && (
                        <div className="sim-output-box">
                          <strong>RESULTADO DA SIMULAÇÃO:</strong> Com{" "}
                          {poluicaoCiclo}% de poluição na profundidade de{" "}
                          {profundidadeCiclo}, o pH da chuva atingiu{" "}
                          <strong>
                            {(5.6 - Number(poluicaoCiclo) * 0.018).toFixed(2)}
                          </strong>
                          .{" "}
                          {Number(poluicaoCiclo) >= 60
                            ? "Acidez elevada! Contaminação severa de corais e estuários."
                            : "Ciclo dentro dos limites de amortecimento natural."}
                          <p className="sim-tip">
                            <em>
                              Nota de Investigação: O que acontece quando a
                              poluição atinge <strong>100%</strong> na{" "}
                              <strong>Zona Abissal (4.000m — Setor 14)</strong>?
                            </em>
                          </p>
                        </div>
                      )}

                      {anomaliaCicloAtiva && (
                        <div className="sim-output-box anomaly-box">
                          <strong>
                            [ALERTA DE SISTEMA — ANOMALIA HIDROLÓGICA AB-14]:
                          </strong>
                          <p>
                            Em contato com 100% de saturação poluente na Fossa
                            do Setor 14, o{" "}
                            <strong>Complexo Bioestrutural AB-14</strong> deixou
                            o estado inerte. Suas partículas aderiram ao vapor
                            d&apos;água e subiram para as nuvens!
                          </p>
                          <p>
                            <strong>REGISTRO RETIDO (Beatriz Almeida #007):</strong>{" "}
                            &ldquo;A Chuva Tóxica não é chuva ácida comum. O
                            organismo que o <strong>Dr. Edgar Charles</strong>{" "}
                            guarda na <strong>Unidade Pará (Para)</strong>,{" "}
                            <strong>Laboratório 52 / Subnível 21</strong> está
                            usando o ciclo da água para se espalhar pela
                            atmosfera!&rdquo;
                          </p>
                          <div className="unlocked-credential-banner">
                            PISTA DE CREDENCIAL NÍVEL 1 CONFIRMADA:{" "}
                            <code>ECha_Para</code> // PIN DE LOCALIZAÇÃO:{" "}
                            <code>5221</code>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                MÓDULO 02: ESPECTRÔMETRO DE AMOSTRAS DE ÁGUA (SETOR 22)
               ========================================================= */}
            {moduloAtivo === 2 && (
              <div className="module-stage">
                <div className="module-stage-grid">
                  <div className="module-controls-col">
                    <span className="mono-tag">
                      QUÍMICA MARINHA // BANCADA DO DR. MANOEL DUARTE (SETOR 22)
                    </span>
                    <h3>Módulo 02: Espectrômetro de Contaminantes e Amostra #14-AB</h3>
                    <p className="module-pedagogy">
                      <strong>Objetivo Educativo:</strong> Analisar como
                      polímeros plásticos e metais pesados alteram a bioquímica
                      do oceano e investigar por que a{" "}
                      <strong>Amostra Retida #14-AB</strong> reagiu de forma
                      consciente.
                    </p>

                    <div className="control-field">
                      <label>1. Selecione a Amostra para Espectrometria:</label>
                      <div className="sample-buttons-grid">
                        {Object.keys(AMOSTRAS_ESPECTROMETRO).map((key) => (
                          <button
                            key={key}
                            type="button"
                            className={
                              amostraSelecionada === key
                                ? "sample-btn active"
                                : "sample-btn"
                            }
                            onClick={() => setAmostraSelecionada(key)}
                          >
                            {AMOSTRAS_ESPECTROMETRO[key].id}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="control-field">
                      <label>2. Selecione o Ensaio Reagente:</label>
                      <div className="reagent-buttons-row">
                        <button
                          type="button"
                          className={
                            reagenteAtivo === "ph"
                              ? "reagent-btn active"
                              : "reagent-btn"
                          }
                          onClick={() => setReagenteAtivo("ph")}
                        >
                          pH & Acidez
                        </button>
                        <button
                          type="button"
                          className={
                            reagenteAtivo === "poluentes"
                              ? "reagent-btn active"
                              : "reagent-btn"
                          }
                          onClick={() => setReagenteAtivo("poluentes")}
                        >
                          Poluentes & Plásticos
                        </button>
                        <button
                          type="button"
                          className={
                            reagenteAtivo === "humano"
                              ? "reagent-btn active"
                              : "reagent-btn"
                          }
                          onClick={() => setReagenteAtivo("humano")}
                        >
                          Exposição a Tecido Humano
                        </button>
                      </div>
                    </div>

                    <div className="sample-explanation-card">
                      <strong>Parecer Pedagógico (ODS-14):</strong>
                      <p>
                        {AMOSTRAS_ESPECTROMETRO[amostraSelecionada].explicacao}
                      </p>
                    </div>
                  </div>

                  <div className="module-display-col">
                    <div
                      className={
                        amostraSelecionada === "AB14"
                          ? "hydro-visor anomaly"
                          : "hydro-visor"
                      }
                    >
                      <div className="visor-top-bar">
                        <span>
                          LEITURA ESPECTROMÉTRICA:{" "}
                          {AMOSTRAS_ESPECTROMETRO[amostraSelecionada].id}
                        </span>
                        <span>SETOR QUÍMICO 22</span>
                      </div>

                      <div className="spectro-readout">
                        <h4>
                          {AMOSTRAS_ESPECTROMETRO[amostraSelecionada].nome}
                        </h4>

                        <div className="spectro-bars">
                          <div
                            className={
                              reagenteAtivo === "ph"
                                ? "s-row highlight"
                                : "s-row"
                            }
                          >
                            <span>LEITURA DE pH:</span>
                            <strong>
                              {AMOSTRAS_ESPECTROMETRO[amostraSelecionada].ph}
                            </strong>
                          </div>
                          <div
                            className={
                              reagenteAtivo === "poluentes"
                                ? "s-row highlight"
                                : "s-row"
                            }
                          >
                            <span>CARGA POLUENTE:</span>
                            <strong>
                              {
                                AMOSTRAS_ESPECTROMETRO[amostraSelecionada]
                                  .poluentes
                              }
                            </strong>
                          </div>
                          <div
                            className={
                              reagenteAtivo === "humano"
                                ? "s-row highlight"
                                : "s-row"
                            }
                          >
                            <span>RESPOSTA EM TECIDO HUMANO:</span>
                            <strong>
                              {
                                AMOSTRAS_ESPECTROMETRO[amostraSelecionada]
                                  .reacaoHumana
                              }
                            </strong>
                          </div>
                        </div>

                        {amostraSelecionada === "AB14" && (
                          <div className="sim-output-box anomaly-box">
                            <strong>
                              [ANOTAÇÃO CRIPTOGRAFADA — DR. MANOEL DUARTE (
                              <code>ManoDuar_22</code>)]:
                            </strong>
                            <p>
                              &ldquo;O material não tinha consciência até entrar
                              em contato com o mar contaminado. Ele absorveu a
                              nossa própria agressão química e despertou! Minha
                              senha de Nível 2 no NERA-NET é a sequência
                              numérica direta (A=1, B=2 ... Z=26) da palavra de
                              8 letras que define esse veneno:&rdquo;
                            </p>
                            <div className="cipher-sequence-box">
                              SEQUÊNCIA ALFANUMÉRICA:{" "}
                              <code>16 - 15 - 12 - 21 - 9 - 3 - 1 - 15</code>
                            </div>

                            <div className="cipher-solver-inline">
                              <label htmlFor="input-setor22">
                                TRADUZA OS 8 NÚMEROS ACIMA PARA LETRAS (SEM
                                ACENTO/CEDILHA):
                              </label>
                              <input
                                id="input-setor22"
                                type="text"
                                placeholder="Digite a palavra de 8 letras..."
                                value={tentativaPalavra}
                                onChange={(e) =>
                                  verificarCifraSetor22(e.target.value)
                                }
                              />
                            </div>

                            {cifra22Resolvida && (
                              <div className="unlocked-credential-banner">
                                ✓ DECODIFICAÇÃO CORRETA (POLUICAO)! <br />
                                CREDENCIAL NÍVEL 2: <code>ManoDuar_22</code> //
                                SENHA: <code>1615122193115</code>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                MÓDULO 03: RECEPTOR ACÚSTICO & SONAR BATIMÉTRICO
               ========================================================= */}
            {moduloAtivo === 3 && (
              <div className="module-stage">
                <div className="module-stage-grid">
                  <div className="module-controls-col">
                    <span className="mono-tag">
                      BIOACÚSTICA & HIDROFONES // MONITORAMENTO DE PROFUNDIDADE
                    </span>
                    <h3>Módulo 03: Sonar Batimétrico e Poluição Sonora</h3>
                    <p className="module-pedagogy">
                      <strong>Objetivo Educativo:</strong> Identificar como
                      oceanógrafos monitoram a vida marinha pelo som e como o
                      ruído de navios e sondas interfere na comunicação de
                      cetáceos.
                    </p>

                    <div className="control-field">
                      <label htmlFor="sel-freq">1. Frequência do Hidrofone (Hz):</label>
                      <select
                        id="sel-freq"
                        value={freqSonar}
                        onChange={(e) => setFreqSonar(e.target.value)}
                      >
                        <option value="20">20 Hz (Infrassom — Baleia-Fin)</option>
                        <option value="120">
                          120 Hz (Ruído de Hélices e Cargueiros)
                        </option>
                        <option value="500">
                          500 Hz (Atividade Hidrotermal Natural)
                        </option>
                        <option value="1400">
                          1.400 Hz (Frequência Bloqueada — Boia Setor-14)
                        </option>
                      </select>
                    </div>

                    <div className="control-field">
                      <label htmlFor="sel-prof-sonar">
                        2. Profundidade de Escuta:
                      </label>
                      <select
                        id="sel-prof-sonar"
                        value={profSonar}
                        onChange={(e) => setProfSonar(e.target.value)}
                      >
                        <option value="100">100 metros (Plataforma Continental)</option>
                        <option value="800">800 metros (Zona de Canal Acústico)</option>
                        <option value="2500">2.500 metros (Talude Abissal)</option>
                        <option value="5200">
                          5.200 metros (Fossa Abissal Setor-14 [PROIBIDO])
                        </option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn-execute-sim"
                      onClick={emitirPulsoAcustico}
                    >
                      🔊 EMITIR PULSO DE SONAR{" "}
                      {audioSonarAtivo ? "(SINAL ATIVO)" : ""}
                    </button>

                    <div className="sample-explanation-card">
                      <strong>Guia de Sinais Catalogados:</strong>
                      <ul className="sonar-guide-list">
                        <li>
                          <code>120 Hz / 100m</code>: Tráfego Marítimo Intenso
                        </li>
                        <li>
                          <code>20 Hz / 800m</code>: Vocalização de Cetáceos
                        </li>
                        <li>
                          <code>500 Hz / 2500m</code>: Fendas Vulcânicas
                        </li>
                        <li className="danger-text">
                          <code>1.400 Hz / 5200m</code>: NÃO SINTONIZAR (Eco
                          Bioestrutural AB-14)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="module-display-col">
                    <div
                      className={
                        sinalAbissalAtivo
                          ? "hydro-visor anomaly"
                          : "hydro-visor"
                      }
                    >
                      <div className="visor-top-bar">
                        <span>
                          OSCILOSCÓPIO ACÚSTICO: {freqSonar} Hz @ -{profSonar}m
                        </span>
                        <span>
                          {sinalAbissalAtivo
                            ? "SINAL ANÔMALO DETECTADO"
                            : "ESPECTRO NORMAL"}
                        </span>
                      </div>

                      {/* Osciloscópio SVG */}
                      <svg
                        viewBox="0 0 500 130"
                        className="sonar-wave-svg"
                        aria-label="Forma de onda do sonar"
                      >
                        <rect width="500" height="130" fill="#050c14" />
                        <line
                          x1="0"
                          y1="65"
                          x2="500"
                          y2="65"
                          stroke="#1e293b"
                          strokeDasharray="4 4"
                        />
                        <path
                          d={
                            sinalAbissalAtivo
                              ? "M 0 65 L 60 65 L 75 20 L 90 115 L 105 40 L 120 85 L 135 65 L 220 65 L 235 15 L 250 118 L 265 35 L 280 88 L 295 65 L 380 65 L 395 18 L 410 115 L 425 40 L 440 65 L 500 65"
                              : "M 0 65 Q 30 20, 60 65 T 120 65 T 180 65 T 240 65 T 300 65 T 360 65 T 420 65 T 480 65 L 500 65"
                          }
                          fill="none"
                          stroke={sinalAbissalAtivo ? "#ef4444" : "#38bdf8"}
                          strokeWidth="2.5"
                        />
                      </svg>

                      {!sinalAbissalAtivo ? (
                        <div className="sim-output-box">
                          <strong>DIAGNÓSTICO ACÚSTICO:</strong> Frequência de{" "}
                          {freqSonar} Hz a {profSonar}m registra padrão marinho
                          convencional. A poluição sonora de baixa frequência
                          reduz em até 60% o alcance de comunicação de baleias e
                          golfinhos.
                        </div>
                      ) : (
                        <div className="sim-output-box anomaly-box">
                          <strong>
                            [INTERCEPTAÇÃO DE SONDA — FOSSA SETOR-14 (-5.200m)]:
                          </strong>
                          <p>
                            A forma de onda acima não é geológica: é um{" "}
                            <strong>eletrocardiograma humano</strong> sendo
                            imitado pelo fundo do oceano! A sonda transmitiu um
                            pacote de texto cifrado em{" "}
                            <strong>Cifra de César</strong>.
                          </p>

                          <div className="control-field" style={{ marginTop: "10px" }}>
                            <label htmlFor="slider-cesar">
                              CALIBRAR DESLOCAMENTO DE FASE (SHIFT DE CÉSAR:{" "}
                              <strong>+{shiftCesar}</strong> — Dica: Número do
                              Complexo AB-__):
                            </label>
                            <input
                              id="slider-cesar"
                              type="range"
                              min="0"
                              max="25"
                              value={shiftCesar}
                              onChange={(e) =>
                                atualizarShiftSonar(e.target.value)
                              }
                            />
                          </div>

                          <div className="cipher-sequence-box">
                            <span>SINAL RECEBIDO:</span>
                            <code>{textoDecodificadoSonar}</code>
                          </div>

                          {sonarDecodificadoSucesso && (
                            <div className="unlocked-credential-banner">
                              ✓ TRANSMISSÃO DECODIFICADA COM SHIFT +14! <br />O
                              AB-14 desenvolveu consciência e respondeu ao
                              sonar. Chave de Natal confirmada:{" "}
                              <code>2412a</code>.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                MÓDULO 04: ATLAS TAXONÔMICO & MORFOLOGIA DA CALAMIDADE
               ========================================================= */}
            {moduloAtivo === 4 && (
              <div className="module-stage">
                <div className="module-stage-grid">
                  <div className="module-controls-col">
                    <span className="mono-tag">
                      BIODIVERSIDADE & TAXONOMIA // CLASSIFICADOR DICOTÔMICO
                    </span>
                    <h3>
                      Módulo 04: Identificação Biológica e o Espécime #05
                    </h3>
                    <p className="module-pedagogy">
                      <strong>Objetivo Educativo:</strong> Utilizar critérios
                      celulares e fisiológicos para classificar organismos
                      marinhos e investigar a amostra anômala recolhida após um
                      evento de Chuva Tóxica.
                    </p>

                    <div className="control-field">
                      <label htmlFor="tax-1">1. Metabolismo Celular Próprio:</label>
                      <select
                        id="tax-1"
                        value={taxMetabolismo}
                        onChange={(e) => setTaxMetabolismo(e.target.value)}
                      >
                        <option value="presente">
                          Presente (Respiração Aeróbica / Anaeróbica)
                        </option>
                        <option value="ausente">
                          Ausente (Completamente Inerte Isoladamente)
                        </option>
                      </select>
                    </div>

                    <div className="control-field">
                      <label htmlFor="tax-2">2. Reprodução / Divisão Celular:</label>
                      <select
                        id="tax-2"
                        value={taxDivisao}
                        onChange={(e) => setTaxDivisao(e.target.value)}
                      >
                        <option value="mitose">
                          Mitose / Bipartição Convencional
                        </option>
                        <option value="replicacao">
                          Replicação Viral Intracelular
                        </option>
                        <option value="ausente">
                          Não realiza divisão celular própria
                        </option>
                      </select>
                    </div>

                    <div className="control-field">
                      <label htmlFor="tax-3">3. Enquadramento Taxonômico:</label>
                      <select
                        id="tax-3"
                        value={taxReino}
                        onChange={(e) => setTaxReino(e.target.value)}
                      >
                        <option value="animalia">
                          Cnidaria / Echinodermata (Regeneração Natural)
                        </option>
                        <option value="fungi">
                          Bactéria, Vírus ou Fungo Marinho
                        </option>
                        <option value="incompativel">
                          Incompatível com Vírus, Bactéria ou Fungo
                        </option>
                      </select>
                    </div>

                    <div className="control-field">
                      <label htmlFor="tax-4">
                        4. Reação ao Contato com Tecido Humano:
                      </label>
                      <select
                        id="tax-4"
                        value={taxReacao}
                        onChange={(e) => setTaxReacao(e.target.value)}
                      >
                        <option value="neutra">
                          Nenhuma reação específica
                        </option>
                        <option value="toxica">
                          Irritação urticante (Ex: Água-viva)
                        </option>
                        <option value="mutacao_marinha">
                          Reorganização Celular & Mutação com Características
                          Marinhas
                        </option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn-execute-sim"
                      onClick={analisarEspecime}
                    >
                      PROCESSAR CHAVE TAXONÔMICA →
                    </button>
                  </div>

                  <div className="module-display-col">
                    <div
                      className={
                        laudoTaxonomico === "calamidade"
                          ? "hydro-visor anomaly"
                          : "hydro-visor"
                      }
                    >
                      <div className="visor-top-bar">
                        <span>LAUDO DE CLASSIFICAÇÃO BIOLÓGICA</span>
                        <span>BANCO DE BIODIVERSIDADE N.E.R.A.</span>
                      </div>

                      {!laudoTaxonomico && (
                        <div className="sim-output-box">
                          Configure os 4 parâmetros à esquerda de acordo com as
                          propriedades descritas nos relatórios do{" "}
                          <strong>Complexo Bioestrutural AB-14</strong> para
                          identificar o Espécime #05.
                        </div>
                      )}

                      {laudoTaxonomico === "comum" && (
                        <div className="sim-output-box">
                          <strong>ESPÉCIME MARINHO CONVENCIONAL:</strong> Os
                          parâmetros selecionados correspondem a organismos
                          biológicos conhecidos da fauna oceânica.
                          <p className="sim-tip">
                            <em>
                              Dica: O AB-14 não possui metabolismo próprio, não
                              realiza divisão celular, não é vírus/bactéria/fungo
                              e provoca mutação marinha em tecidos humanos.
                            </em>
                          </p>
                        </div>
                      )}

                      {laudoTaxonomico === "calamidade" && (
                        <div className="sim-output-box anomaly-box">
                          <strong>
                            [ARQUIVO MÉDICO CENSURADO — FENÔMENO &ldquo;A
                            CALAMIDADE&rdquo;]:
                          </strong>
                          <p>
                            Quando o <strong>AB-14</strong> entra em contato com
                            seres humanos através da Chuva Tóxica, ele não atua
                            como uma doença comum: sentindo-se como o próprio
                            oceano ferido, ele{" "}
                            <strong>
                              reescreve o DNA e os tecidos humanos, originando
                              criaturas com características marinhas abissais
                            </strong>
                            .
                          </p>
                          <p>
                            <strong>REGISTRO DE EXCEÇÃO (PRONTUÁRIO #09):</strong>{" "}
                            Entre todos os infectados no laboratório, apenas um
                            indivíduo absorveu a regeneração acelerada sem
                            sofrer metamorfose completa: o operador registrado
                            sob o código de usuário{" "}
                            <code>Ryan_Michael</code>.
                          </p>
                          <div className="unlocked-credential-banner">
                            IDENTIDADE DE NÍVEL 3 CONFIRMADA:{" "}
                            <code>Ryan_Michael</code> (Investigue o Módulo 05
                            para obter a senha do protocolo de 24/12).
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                MÓDULO 05: AUDITORIA DE SENSORES (O APAGÃO DE 24/12)
               ========================================================= */}
            {moduloAtivo === 5 && (
              <div className="module-stage">
                <div className="audit-stage-full">
                  <div className="audit-header-block">
                    <span className="mono-tag">
                      TELEMETRIA E AUDITORIA AMBIENTAL // PROTOCOLO 24/12 (ANEXO
                      A)
                    </span>
                    <h3>
                      Módulo 05: Reconciliação de Dados da Estação Costeira (24
                      de Dezembro)
                    </h3>
                    <p>
                      <strong>Instrução de Auditoria:</strong> Na noite de{" "}
                      <code>24/12</code>, a Diretoria publicou a{" "}
                      <strong>Nota Oficial #019</strong> garantindo que não
                      houve falha de contenção. Compare as duas colunas abaixo e{" "}
                      <strong>
                        clique nas 3 linhas onde a Fita Bruta dos Sensores
                        desmente a versão oficial
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="audit-table-wrapper">
                    <table className="audit-comparison-table">
                      <thead>
                        <tr>
                          <th>MARCAR</th>
                          <th>HORÁRIO</th>
                          <th>EQUIPAMENTO / SENSOR</th>
                          <th>VERSÃO PÚBLICA (NOTA #019)</th>
                          <th>FITA BRUTA DO SENSOR (BUFFER INTERNO)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {LINHAS_TELEMETRIA.map((linha) => {
                          const marcada = linhasMarcadas.includes(linha.id);
                          return (
                            <tr
                              key={linha.id}
                              className={marcada ? "audit-row selected" : "audit-row"}
                              onClick={() => alternarLinha(linha.id)}
                            >
                              <td className="audit-check-cell">
                                <input
                                  type="checkbox"
                                  checked={marcada}
                                  onChange={() => {}}
                                  aria-label={`Selecionar linha ${linha.horario}`}
                                />
                              </td>
                              <td className="mono-cell">{linha.horario}</td>
                              <td>
                                <strong>{linha.sensor}</strong>
                              </td>
                              <td>{linha.relatorioPublico}</td>
                              <td className="raw-tape-cell">
                                {linha.fitaBruta}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="audit-actions-row">
                    <button
                      type="button"
                      className="btn-execute-sim"
                      onClick={validarAuditoria2412}
                    >
                      EMITIR LAUDO DE DISCREPÂNCIA ({linhasMarcadas.length}/3
                      SELECIONADAS)
                    </button>
                    {erroAuditoria && (
                      <span className="audit-error-msg">{erroAuditoria}</span>
                    )}
                  </div>

                  {auditoriaConcluida && (
                    <div className="sim-output-box anomaly-box">
                      <strong>
                        ✓ LAUDO DE AUDITORIA VALIDADO — RECONSTRUÇÃO DO COLAPSO
                        (24/12):
                      </strong>
                      <p>
                        A fraude institucional foi comprovada: durante os{" "}
                        <strong>11 minutos de apagão</strong> e os{" "}
                        <strong>3 minutos de corte nas câmeras</strong> na noite
                        de <code>24/12</code>, o tanque principal perdeu pressão
                        e o <strong>AB-14</strong> escapou pelas chaminés de
                        exaustão, dando início à <strong>Calamidade</strong>.
                      </p>
                      <div className="unlocked-credential-banner">
                        CREDENCIAL DE NÍVEL 3 DESBLOQUEADA: <br />
                        USERNAME: <code>Ryan_Michael</code> &nbsp;|&nbsp; SENHA
                        DO PROTOCOLO (24/12 + Anexo a): <code>2412a</code>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* =========================================================
              ACERVO AUDIOVISUAL ODS-14 (VÍDEOS E REFLEXÃO PRESERVADOS)
             ========================================================= */}
          <section className="secao-reflexao-publica">
            <div className="reflexao-header">
              <span className="mono-tag">
                ACERVO DOCUMENTAL & CONSCIENTIZAÇÃO // OBJETIVO DE
                DESENVOLVIMENTO SUSTENTÁVEL 14
              </span>
              <h2>
                Reflexão: O oceano nos deu a vida. Cuidar dele ainda é uma
                escolha 🌊
              </h2>
              <p className="reflexao-texto">
                você ainda acha isso certo? O que você faria se tivesse a chance
                de mudar o rumo da história? O que você faria se tivesse a
                chance de salvar vidas? O que você faria se tivesse a chance de
                salvar o planeta? Refletir sobre nossas ações e suas
                consequências é essencial para construir um futuro mais
                consciente e sustentável. O oceano é um recurso vital para a
                vida na Terra, e sua preservação deve ser uma prioridade para
                todos nós.
              </p>
            </div>

            <div className="ods-videos-grid">
              <article className="ods-video-card">
                <div className="ods-video-meta">
                  <span>REGISTRO AUDIOVISUAL #01</span>
                  <span>ODS-14 // POLUIÇÃO PLÁSTICA</span>
                </div>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4l7Jns0u9Sg"
                    title="Plástico nos oceanos - Registro 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </article>

              <article className="ods-video-card">
                <div className="ods-video-meta">
                  <span>REGISTRO AUDIOVISUAL #02</span>
                  <span>ODS-14 // ECOSSISTEMAS MARINHOS</span>
                </div>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/tVMe8baPGDA?si=eevCWqwOlpRie9pT"
                    title="Plástico nos oceanos - Registro 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </article>

              <article className="ods-video-card">
                <div className="ods-video-meta">
                  <span>REGISTRO AUDIOVISUAL #03</span>
                  <span>ODS-14 // PRESERVAÇÃO DA VIDA NA ÁGUA</span>
                </div>
                <div className="video-responsive">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/5X_0xACN_48?si=I-Kcs4jqYnuBM8Mc"
                    title="Plástico nos oceanos - Registro 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
