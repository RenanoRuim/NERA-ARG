const lerRss = require("./components/leitorRss");

async function testar() {
  try {
    const noticias = await lerRss(
      "https://oeco.org.br/categoria/mar-e-costa/feed/",
    );

    console.log(noticias);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

testar();
