const mongoose = require("mongoose");

async function connectDB() {
  const mongoURI = "mongodb://127.0.0.1:27017/orderdb";

  await mongoose.connect(mongoURI);

  console.log("Banco de dados conectado com sucesso.");
}

module.exports = connectDB;