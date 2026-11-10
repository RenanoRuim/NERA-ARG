import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col brand-col">
          <div className="footer-brand-header">
            <span className="footer-acronym">N.E.R.A.</span>
            <span className="footer-badge">ISO-14001 // MARPOL</span>
          </div>
          <p className="footer-org-name">
            Núcleo de Estudos e Recuperação Ambiental
          </p>
          <p className="footer-desc">
            Autarquia científica dedicada ao monitoramento oceanográfico,
            controle de precipitação ácida e preservação da biosfera marinha
            sob as diretrizes da Agenda 2030 (ODS-14).
          </p>
        </div>

        <div className="footer-col">
          <h4>Portal Institucional</h4>
          <ul className="footer-list">
            <li>
              <Link to="/">Painel de Monitoramento</Link>
            </li>
            <li>
              <Link to="/about">O Instituto & Diretoria</Link>
            </li>
            <li>
              <Link to="/pesquisas">Publicações & Relatórios</Link>
            </li>
            <li>
              <Link to="/centro-ods14">Centro de Conhecimento ODS-14</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Unidades Operacionais</h4>
          <ul className="footer-list mono-list">
            <li>UNIDADE PARÁ — Lab. 52 / Subnível 21</li>
            <li>ESTAÇÃO COSTEIRA ATLÂNTICO SUL</li>
            <li>BOIA ABISSAL SETOR-14 [MANUTENÇÃO]</li>
            <li>COMPLEXO SUBTERRÂNEO DE CONTENÇÃO</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sistemas Internos</h4>
          <p className="footer-desc">
            O acesso ao banco de dados interno (NERA-NET) é monitorado e
            restrito a pesquisadores credenciados.
          </p>
          <div className="footer-links">
            <Link to="/login" className="footer-intranet-link">
              → Acessar Terminal NERA-NET
            </Link>
            <a
              href="https://aaadry.itch.io/the-last-bunker"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
            >
              Arquivo Externo: The Last Bunker ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            &copy; 20XX N.E.R.A. — Núcleo de Estudos e Recuperação Ambiental.
            Todos os direitos reservados.
          </p>
          <span className="footer-protocol">
            PROTOCOLO DE SEGURANÇA AMBIENTAL Nº 14-AB // REDE NACIONAL DE
            OCEANOGRAFIA
          </span>
        </div>
      </div>
    </footer>
  );
}
