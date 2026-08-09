const express = require("express");

const router = express.Router();

const usuarios = [
  {
    usuario: "ECha_Para",
    senha: "5221",
    nivel: 1,
  },

  {
    usuario: "ManoDuar_22",
    senha: "1615122193115",
    nivel: 2,
  },

  {
    usuario: "Ryan_Michael",
    senha: "2412a",
    nivel: 3,
  },
];

router.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  const usuarioEncontrado = usuarios.find(
    (user) => user.usuario === usuario && user.senha === senha,
  );

  if (!usuarioEncontrado) {
    return res.status(401).json({
      erro: "Credenciais inválidas.",
    });
  }

  return res.json({
    sucesso: true,
    nivel: usuarioEncontrado.nivel,
  });
});

module.exports = router;
