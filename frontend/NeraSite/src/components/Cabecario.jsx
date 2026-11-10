import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Cabecario() {
  const location = useLocation();

  const isActive = (path) => {
    if (
      path === "/centro-ods14" &&
      (location.pathname === "/centro-ods14" ||
        location.pathname === "/nera-education")
    ) {
      return "nav-link active";
    }
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header className="inst-header">
      {/* Faixa Técnica de Telemetria Costeira e Coordenadas */}
      <div className="inst-topbar">
        <div className="inst-topbar-inner">
          <div className="telemetry-Group">
            <span className="telemetry-coord">
              ESTAÇÃO CENTRAL: 04°12&apos;18&quot;S 38°54&apos;02&quot;W
            </span>
            <span className="telemetry-divider">//</span>
            <span className="telemetry-badge alert">
              <span className="pulse-dot" /> PRECIPITAÇÃO ÁCIDA: pH 3.82 (ALERTA
              ÂMBAR)
            </span>
            <span className="telemetry-divider hide-mobile">//</span>
            <span className="telemetry-item hide-mobile">
              SONDA ABISSAL SETOR-14: <strong>OSCILAÇÃO EM 1.400 Hz</strong>
            </span>
          </div>

          <div className="topbar-actions">
            <Link to="/login" className="intranet-btn">
              [ TERMINAL NERA-NET ]
            </Link>
          </div>
        </div>
      </div>

      {/* Cabeçalho Arquitetônico em Grade */}
      <div className="cabecario">
        <div className="cabecario-inner">
          <Link to="/" className="brand-link">
            <div className="brand-emblem" aria-hidden="true">
              <svg
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nera-svg-logo"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="49"
                  height="49"
                  fill="#08121e"
                  stroke="#08121e"
                  strokeWidth="2"
                />
                {/* Grade Batimétrica Técnica */}
                <line
                  x1="26"
                  y1="4"
                  x2="26"
                  y2="48"
                  stroke="#38bdf8"
                  strokeWidth="0.75"
                  strokeDasharray="2 2"
                  opacity="0.45"
                />
                <line
                  x1="4"
                  y1="26"
                  x2="48"
                  y2="26"
                  stroke="#38bdf8"
                  strokeWidth="0.75"
                  strokeDasharray="2 2"
                  opacity="0.45"
                />
                <circle
                  cx="26"
                  cy="26"
                  r="17"
                  stroke="#e6e3da"
                  strokeWidth="1.2"
                />
                {/* Curvas de Profundidade */}
                <path
                  d="M11 25C15 21 20 21 26 25C32 29 37 29 41 25"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                <path
                  d="M13 31C17 27.5 21 27.5 26 31C31 34.5 35 34.5 39 31"
                  stroke="#e6e3da"
                  strokeWidth="1.5"
                />
                <polygon points="26,11 30,19 22,19" fill="#38bdf8" />
                <circle cx="26" cy="37" r="2" fill="#ef4444" />
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title-row">
                <span className="brand-acronym">N.E.R.A.</span>
                <span className="brand-doc-code">REG. AUTÁRQUICO Nº 14-AB</span>
              </div>
              <span className="brand-fullname">
                Núcleo de Estudos e Recuperação Ambiental
              </span>
            </div>
          </Link>

          <nav className="cabecario-nav" aria-label="Navegação Principal">
            <Link to="/" className={isActive("/")}>
              <span className="nav-idx">01.</span> Boletim & Início
            </Link>
            <Link to="/about" className={isActive("/about")}>
              <span className="nav-idx">02.</span> O Instituto
            </Link>
            <Link to="/pesquisas" className={isActive("/pesquisas")}>
              <span className="nav-idx">03.</span> Arquivo Documental
            </Link>
            <Link
              to="/centro-ods14"
              className={`${isActive("/centro-ods14")} nav-edu-highlight`}
            >
              <span className="nav-idx">04.</span> NERA Education
            </Link>
            <Link to="/login" className="nav-link nav-login-cta">
              NERA-NET ↗
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
