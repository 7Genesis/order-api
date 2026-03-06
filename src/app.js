const express = require("express");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.use(orderRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Rota não encontrada"
  });
});

module.exports = app;