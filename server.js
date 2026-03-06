const app = require("./src/app");
const connectDB = require("./src/database/connection");

const PORT = 3000;

async function startServer() {
  try {

    console.log("Conectando ao banco...");

    await connectDB();

    console.log("Banco conectado");

    app.listen(PORT, () => {
      console.log(`API rodando em http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao iniciar:", error);
  }
}

startServer();