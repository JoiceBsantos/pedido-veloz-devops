const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "pagamentos-service",
    status: "online"
  });
});

app.get("/pagamentos", (req, res) => {
  res.json([
    {
      id: 1,
      status: "Pagamento aprovado"
    }
  ]);
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Pagamentos Service rodando na porta ${PORT}`);
});