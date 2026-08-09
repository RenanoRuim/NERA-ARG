import "../styles/Footer.css";
//import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 20XX NERA. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a
          href="https://aaadry.itch.io/the-last-bunker"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Last Bunker
        </a>
      </div>
    </footer>
  );
}
