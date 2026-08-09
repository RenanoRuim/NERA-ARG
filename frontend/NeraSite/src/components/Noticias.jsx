import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Noticia.css";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarNoticias() {
      try {
        const resposta = await axios.get("http://localhost:3000/api/noticias");
        setNoticias(resposta.data);
      } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        setErro("Não foi possível carregar as notícias.");
      } finally {
        setCarregando(false);
      }
    }

    carregarNoticias();
  }, []);

  if (carregando) return <p>Carregando notícias...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <section className="noticias-container">
      <h2 className="noticias-titulo">Notícias Recentes</h2>

      <div className="noticias-grid">
        {noticias.map((noticia, index) => (
          <article key={index} className="noticia-card">
            {/* Adicione esta tag <img> */}
            {noticia.imagem && (
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                className="noticia-imagem"
              />
            )}

            <div className="noticia-conteudo">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
            </div>

            <div className="noticia-rodape">
              <span className="noticia-data">
                🗓️ {new Date(noticia.data).toLocaleDateString("pt-BR")}
              </span>
              <a
                href={noticia.link}
                target="_blank"
                rel="noreferrer"
                className="noticia-link"
              >
                Ler notícia →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
