const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const noticiasRouter = require("./routes/noticias");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRouter);

app.use("/api", noticiasRouter);

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
