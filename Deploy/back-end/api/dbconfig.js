import { MongoClient } from "mongodb";
import {
  discordLogs,
} from "npm-package-nodejs-utils-lda";

export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    discordLogs("MONGO DB CONNECTION","Conectando ao cluster do banco de dados...");
    console.log("Conectando ao cluster do banco de dados...");
    await mongoClient.connect();
    discordLogs("MONGO DB CONNECTION","Conectado ao MongoDB Atlas com sucesso!");
    console.log("Conectado ao MongoDB Atlas com sucesso!");

    return mongoClient;
  } catch (erro) {
    discordLogs("ERR MONGO DB CONNECTION",`Falha na conexão com o banco! ${erro}`);
    console.error("Falha na conexão com o banco!", erro);
    process.exit();
  }
}
