const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    gateway: "API Gateway",
    status: "online"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.get("/servicos", (req, res) => {
  res.json({
    servicos: [
      "pedidos-service",
      "pagamentos-service",
      "estoque-service"
    ]
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});