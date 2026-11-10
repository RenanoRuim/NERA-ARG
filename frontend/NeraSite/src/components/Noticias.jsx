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
        const resposta = await axios.get(
          "https://nera-arg.onrender.com/api/noticias",
        );
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

  return (
    <section className="noticias-container">
      <div className="noticias-header-bar">
        <div>
          <span className="noticias-kicker">
            OBSERVATÓRIO EXTERNO // MONITORAMENTO ODS-14
          </span>
          <h2 className="noticias-titulo">
            Boletim de Imprensa & Monitoramento Marinho
          </h2>
        </div>
        <div className="noticias-meta-badge">
          FONTE: REDE DE CONSERVAÇÃO COSTEIRA (RSS ATIVO)
        </div>
      </div>

      {carregando && (
        <div className="noticias-status-box">
          <span className="status-spinner" />
          <p>Sincronizando feed de monitoramento ambiental externo...</p>
        </div>
      )}

      {erro && (
        <div className="noticias-status-box erro">
          <p>{erro}</p>
          <span className="noticias-status-sub">
            Aviso de Rede: O servidor de indexação externa pode estar em rotina
            de sincronização. Consulte os relatórios técnicos internos na aba
            Pesquisas & Documentos.
          </span>
        </div>
      )}

      {!carregando && !erro && (
        <div className="noticias-grid">
          {noticias.map((noticia, index) => (
            <article key={index} className="noticia-card">
              {noticia.imagem && (
                <div className="noticia-imagem-wrapper">
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="noticia-imagem"
                  />
                  <span className="noticia-tag">ODS-14 // MAR E COSTA</span>
                </div>
              )}

              <div className="noticia-conteudo">
                {!noticia.imagem && (
                  <span className="noticia-tag-inline">
                    ODS-14 // MAR E COSTA
                  </span>
                )}
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descricao}</p>
              </div>

              <div className="noticia-rodape">
                <span className="noticia-data">
                  REGISTRO:{" "}
                  {new Date(noticia.data).toLocaleDateString("pt-BR")}
                </span>
                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noreferrer"
                  className="noticia-link"
                >
                  Ler relatório externo →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
