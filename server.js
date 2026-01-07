const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const KLOOK_LINK = "https://klook.tpo.lv/rm2j9v08";

const ofertas = [
  {
    titulo: "Ingressos Disney",
    local: "Orlando, EUA",
    precoEstimado: "A partir de R$ 299",
    link: KLOOK_LINK
  },
  {
    titulo: "City Tour em Paris + Torre Eiffel",
    local: "Paris, França",
    precoEstimado: "A partir de R$ 159",
    link: KLOOK_LINK
  },
  {
    titulo: "Passeio histórico em Lisboa",
    local: "Lisboa, Portugal",
    precoEstimado: "A partir de R$ 99",
    link: KLOOK_LINK
  },
  {
    titulo: "Experiências em Buenos Aires",
    local: "Buenos Aires, Argentina",
    precoEstimado: "A partir de R$ 89",
    link: KLOOK_LINK
  }
];

app.get("/", (req, res) => {
  res.send("API de Ofertas rodando 🚀");
});

app.get("/ofertas", (req, res) => {
  res.json(ofertas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
