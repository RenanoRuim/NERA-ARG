import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [autenticando, setAutenticando] = useState(false);
  const navigate = useNavigate();

  async function fazerLogin(e) {
    e.preventDefault();

    setErro("");
    setAutenticando(true);

    try {
      const resposta = await fetch("https://nera-arg.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuario.trim(),
          senha: senha.trim(),
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro);
        return;
      }

      localStorage.setItem("nivelAcesso", dados.nivel);
      localStorage.setItem("usuarioNera", usuario.trim());

      navigate("/admin");
    } catch {
      setErro("Erro ao conectar ao servidor.");
    } finally {
      setAutenticando(false);
    }
  }

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-card">
          <div className="login-header">
            <span className="system-status">
              ● TERMINAL NERA-NET v4.02 // SISTEMA ONLINE
            </span>

            <h1>NERA</h1>

            <p>ACESSO RESTRITO AO SISTEMA INTERNO</p>
          </div>

          <form onSubmit={fazerLogin}>
            <div className="input-group">
              <label htmlFor="usuario">USERNAME (CREDENCIAL DE REDE)</label>

              <input
                id="usuario"
                type="text"
                placeholder="Ex: InicialSobrenome_Unidade"
                value={usuario}
                autoComplete="username"
                required
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">SENHA / CHAVE DE INDEXAÇÃO</label>

              <input
                id="senha"
                type="password"
                placeholder="Entre com sua chave de acesso"
                value={senha}
                autoComplete="current-password"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button type="submit" disabled={autenticando}>
              {autenticando ? "VERIFICANDO CREDENCIAL..." : "ENTRAR"}
            </button>
          </form>

          {erro && (
            <p className="login-error" role="alert">
              [ERRO DE AUTENTICAÇÃO]: {erro}
            </p>
          )}

          <div className="login-help-box">
            <span>PROTOCOLO TI-08:</span> Em caso de coordenador em licença
            médica, utilize o código da Unidade Regional e o PIN de localização
            física registrado no Diretório Institucional.
          </div>

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
