import { Link, Outlet } from "react-router-dom";
import "../../styles/Admin.css";

export default function AdminLayout() {
  const nivel = Number(localStorage.getItem("nivelAcesso"));

  return (
    <main className="admin-page">
      <header className="admin-header">
        <span className="system-status">● NERA SYSTEM ONLINE</span>

        <h1>NERA INTERNAL DATABASE</h1>

        <p>NIVEL DE ACESSO: {nivel}</p>
      </header>

      <nav className="admin-nav">
        <Link to="/admin">DATABASE</Link>

        {nivel >= 1 && <Link to="/admin/pesquisadores">PESQUISADORES</Link>}

        {nivel >= 1 && <Link to="/admin/relatorios">RELATÓRIOS</Link>}

        {nivel >= 2 && <Link to="/admin/incidentes">INCIDENTES</Link>}

        {nivel >= 2 && <Link to="/admin/organismo">BIOLOGICAL DATABASE</Link>}

        {nivel >= 3 && <Link to="/admin/thalassa">TALASSA</Link>}
      </nav>

      <Outlet />
    </main>
  );
}
