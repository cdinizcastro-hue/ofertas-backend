const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const ofertas = [
  {
    origem: "São Paulo",
    destino: "Lisboa",
    empresa: "TAP",
    precoAntigo: 4200,
    precoAtual: 1890,
    link: "https://klook.tpo.lv/rm2j9v08"
  },
  {
    origem: "Rio de Janeiro",
    destino: "Paris",
    empresa: "Air France",
    precoAntigo: 5100,
    precoAtual: 2390,
    link: "https://klook.tpo.lv/rm2j9v08"
  },
  {
    origem: "Belo Horizonte",
    destino: "Orlando",
    empresa: "LATAM",
    precoAntigo: 4800,
    precoAtual: 2190,
    link: "https://klook.tpo.lv/rm2j9v08"
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

