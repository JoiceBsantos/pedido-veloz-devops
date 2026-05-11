const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "pedidos-service",
    status: "online"
  });
});

app.get("/pedidos", (req, res) => {
  res.json([
    {
      id: 1,
      produto: "Notebook",
      quantidade: 1
    }
  ]);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Pedidos Service rodando na porta ${PORT}`);
});