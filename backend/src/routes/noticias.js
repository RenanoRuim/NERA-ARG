const express = require("express");
const lerRss = require("../components/leitorRss");

const router = express.Router();

const URL_RSS = "https://oeco.org.br/categoria/mar-e-costa/feed/";

router.get("/noticias", async (req, res) => {
  try {
    const noticias = await lerRss(URL_RSS);

    const palavrasODS14 = [
      "poluição",
      "plástico",
      "conservação",
      "preservação",
      "corais",
      "pesca",
      "lixo",
      "sustentável",
      "extinção",
      "fauna",
    ];

    const noticiasODS = noticias.filter((noticia) => {
      const texto = `${noticia.titulo} ${noticia.descricao}`.toLowerCase();
      return palavrasODS14.some((palavra) => texto.includes(palavra));
    });

    res.json(noticiasODS);
  } catch (erro) {
    console.error("Erro ao buscar RSS:", erro);
    res.status(500).json({ erro: "Não foi possível carregar as notícias." });
  }
});

module.exports = router;
