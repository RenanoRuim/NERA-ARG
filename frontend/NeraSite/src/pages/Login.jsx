import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function fazerLogin(e) {
    e.preventDefault();

    setErro("");

    try {
      const resposta = await fetch("https://nera-arg.onrender.com/api/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          usuario,
          senha,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro);
        return;
      }

      localStorage.setItem("nivelAcesso", dados.nivel);

      window.location.href = "/admin";
    } catch (erro) {
      setErro("Erro ao conectar ao servidor.");
    }
  }

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-card">
          <div className="login-header">
            <span className="system-status">● SISTEMA ONLINE</span>

            <h1>NERA</h1>

            <p>ACESSO RESTRITO AO SISTEMA</p>
          </div>

          <form onSubmit={fazerLogin}>
            <div className="input-group">
              <label>USERNAME</label>

              <input
                type="text"
                placeholder="Entre com seu username"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>SENHA</label>

              <input
                type="password"
                placeholder="Entre com sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button type="submit">ENTRAR</button>
          </form>

          {erro && <p className="login-error">{erro}</p>}

          <div className="login-footer">
            <span>NERA RESEARCH NETWORK</span>
            <span>NÍVEL DE ACESSO: RESTRITO</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
