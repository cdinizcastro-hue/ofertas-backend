const express = require("express");
const cors = require("cors");
const cron = require("node-cron");

const app = express();
app.use(cors());

let ofertas = [];

function atualizarOfertas() {
  ofertas = [
    {
      origem: "São Paulo",
      destino: "Lisboa",
      companhia: "TAP",
      precoOriginal: 4200,
      precoPromocional: 1890,
      link: "https://decolar.com/?afiliado=caio123"
    },
    {
      origem: "Rio de Janeiro",
      destino: "Paris",
      companhia: "Air France",
      precoOriginal: 5100,
      precoPromocional: 2390,
      link: "https://decolar.com/?afiliado=caio123"
    },
    {
      origem: "Belo Horizonte",
      destino: "Orlando",
      companhia: "LATAM",
      precoOriginal: 4800,
      precoPromocional: 2190,
      link: "https://decolar.com/?afiliado=caio123"
    }
  ];

  console.log("Ofertas atualizadas:", new Date().toLocaleTimeString());
}

atualizarOfertas();

// atualiza a cada 1 minuto
cron.schedule("* * * * *", atualizarOfertas);

app.get("/ofertas", (req, res) => {
  res.json(ofertas);
});

app.listen(3000, () => {
  console.log("Backend rodando na porta 3000");
});
