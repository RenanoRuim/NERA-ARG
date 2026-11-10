const Parser = require("rss-parser");

const parser = new Parser();

async function lerRss(url) {
  const feed = await parser.parseURL(url);

  return feed.items
    .map((item) => ({
      titulo: item.title,
      descricao: item.contentSnippet || item.summary || "",
      imagem: item.enclosure?.url,
      link: item.link,
      data: item.isoDate || item.pubDate,
    }))
    .filter((noticia) => noticia.titulo && noticia.link && noticia.data);
}

module.exports = lerRss;
