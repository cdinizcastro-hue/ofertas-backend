const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 🔴 LINK DE AFILIADO KLOOK (gerado por você)
const KLOOK_LINK = "https://klook.tpo.lv/rm2j9v08";

const ofertas = [
  {
    titulo: "Ingressos Disney – Orlando",
    local: "Orlando, EUA",
    precoEstimado: "a partir de R$ 299",
    link: KLOOK_LINK
  },
  {
    titulo: "Passeio Torre Eiffel + City Tour",
    local: "Paris, França",
    precoEstimado: "a partir de R$ 159",
    link: KLOOK_LINK
  },
  {
    titulo: "City Tour em Lisboa",
    local: "Lisboa, Portugal",
    precoEstimado: "a partir de R$ 99",
    link: KLOOK_LINK
  },
  {
    titulo: "Passeios em Buenos Aires",
    local: "Buenos Aires, Argentina",
    precoEstimado: "a partir de R$ 89",
    link: KLOOK_LINK
  }
];

app.get("/", (req, res) => {
  res.send("Backend KLOOK rodando 🚀");
});

app.get("/ofertas", (req, res) => {
  res.json(ofertas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
