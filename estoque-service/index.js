const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "estoque-service",
    status: "online"
  });
});

app.get("/estoque", (req, res) => {
  res.json([
    {
      produto: "Notebook",
      quantidade: 15
    }
  ]);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Estoque Service rodando na porta ${PORT}`);
});