const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const LINK_AFILIADO =
  "https://www.aviasales.com.br/?marker=694809.Zze0a69a6d4bc64e329bdae5c-694809";

const ofertas = [
  {
    origem: "São Paulo",
    destino: "Lisboa",
    companhia: "TAP",
    precoOriginal: 4200,
    precoPromocional: 1890,
    link: LINK_AFILIADO
  },
  {
    origem: "Rio de Janeiro",
    destino: "Madrid",
    companhia: "Iberia",
    precoOriginal: 5000,
    precoPromocional: 2390,
    link: LINK_AFILIADO
  },
  {
    origem: "Belo Horizonte",
    destino: "Paris",
    companhia: "Air France",
    precoOriginal: 4800,
    precoPromocional: 2190,
    link: LINK_AFILIADO
  },
  {
    origem: "São Paulo",
    destino: "Orlando",
    companhia: "LATAM",
    precoOriginal: 3800,
    precoPromocional: 1990,
    link: LINK_AFILIADO
  }
];

app.get("/", (req, res) => {
  res.send("Backend de ofertas rodando 🚀");
});

app.get("/ofertas", (req, res) => {
  res.json(ofertas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
