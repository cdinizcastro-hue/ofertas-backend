const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const ofertas = [
  {
    origem: "São Paulo",
    destino: "Lisboa",
    companhia: "TAP",
    precoOriginal: 4200,
    precoPromocional: 1890,
    link: "https://aviasales.tpo.lv/gErDrChc"
  },
  {
    origem: "Rio de Janeiro",
    destino: "Madrid",
    companhia: "Iberia",
    precoOriginal: 5000,
    precoPromocional: 2390,
    link: "https://aviasales.tpo.lv/gErDrChc"
  },
  {
    origem: "Belo Horizonte",
    destino: "Paris",
    companhia: "Air France",
    precoOriginal: 4800,
    precoPromocional: 2190,
    link: "https://aviasales.tpo.lv/gErDrChc"
  },
  {
    origem: "São Paulo",
    destino: "Orlando",
    companhia: "LATAM",
    precoOriginal: 3800,
    precoPromocional: 1990,
    link: "https://aviasales.tpo.lv/gErDrChc"
  }
];

// Rota principal (teste)
app.get("/", (req, res) => {
  res.send("Backend de ofertas rodando 🚀");
});

// Rota das ofertas
app.get("/ofertas", (req, res) => {
  res.json(ofertas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
