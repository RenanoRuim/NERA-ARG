import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Admin.css";

export default function AdminLayout() {
  const nivel = Number(localStorage.getItem("nivelAcesso"));
  const usuarioAtivo = localStorage.getItem("usuarioNera") || "OPERADOR_NERA";
  const location = useLocation();
  const navigate = useNavigate();

  function encerrarSessao() {
    localStorage.removeItem("nivelAcesso");
    localStorage.removeItem("usuarioNera");
    navigate("/login");
  }

  const isNavActive = (path) =>
    location.pathname === path ? "admin-nav-link active" : "admin-nav-link";

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div className="admin-header-top">
          <div>
            <span className="system-status">
              ● NERA-NET INTERNAL TERMINAL // CONNECTION SECURE
            </span>
            <h1>NERA INTERNAL DATABASE</h1>
            <p>
              NIVEL DE ACESSO: <strong>{nivel}</strong> &nbsp;|&nbsp; OPERADOR:{" "}
              <strong>{usuarioAtivo}</strong>
            </p>
          </div>

          <div className="admin-session-controls">
            <Link to="/" className="admin-ctrl-btn secondary">
              ← PORTAL PÚBLICO
            </Link>
            <Link to="/login" className="admin-ctrl-btn">
              TROCAR CREDENCIAL
            </Link>
            <button
              type="button"
              onClick={encerrarSessao}
              className="admin-ctrl-btn danger"
            >
              ENCERRAR SESSÃO
            </button>
          </div>
        </div>
      </header>

      <nav className="admin-nav" aria-label="Navegação NERA-NET">
        <Link to="/admin" className={isNavActive("/admin")}>
          DATABASE
        </Link>

        {nivel >= 1 && (
          <Link
            to="/admin/pesquisadores"
            className={isNavActive("/admin/pesquisadores")}
          >
            PESQUISADORES [NV.1]
          </Link>
        )}

        {nivel >= 1 && (
          <Link
            to="/admin/relatorios"
            className={isNavActive("/admin/relatorios")}
          >
            RELATÓRIOS [NV.1]
          </Link>
        )}

        {nivel >= 2 ? (
          <>
            <Link
              to="/admin/incidentes"
              className={isNavActive("/admin/incidentes")}
            >
              INCIDENTES [NV.2]
            </Link>
            <Link
              to="/admin/organismo"
              className={isNavActive("/admin/organismo")}
            >
              BIOLOGICAL DATABASE [NV.2]
            </Link>
          </>
        ) : (
          <span className="admin-nav-locked" title="Requer Credencial Nível 2">
            🔒 INCIDENTES & BIO-DB [REQUER NV.2]
          </span>
        )}

        {nivel >= 3 ? (
          <Link
            to="/admin/thalassa"
            className={isNavActive("/admin/thalassa")}
          >
            TALASSA [NV.3]
          </Link>
        ) : (
          <span className="admin-nav-locked" title="Requer Credencial Nível 3">
            🔒 PROJETO TALASSA [REQUER NV.3]
          </span>
        )}
      </nav>

      <Outlet />
    </main>
  );
}
