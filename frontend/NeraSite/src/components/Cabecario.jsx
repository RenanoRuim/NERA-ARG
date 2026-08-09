import "../styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logoNERA.png";

export default function Cabecario() {
  return (
    <header>
      <div className="cabecario">
        <img src={Logo} alt="NERA Logo" className="cabecario-logo" />
        <nav className="cabecario-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login ADM</Link>
        </nav>
      </div>
    </header>
  );
}
