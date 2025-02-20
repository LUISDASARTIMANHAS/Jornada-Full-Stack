// Javascript assincrônico
// await async
import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "./dbconfig.js";

// **Conecta ao banco de dados:**
// - Importa a função `conectarAoBanco` do arquivo `dbconfig.js`.
// - Obtém a string de conexão do banco de dados a partir da variável de ambiente `STRING_CONEXAO`.
// - Estabelece a conexão com o banco de dados e armazena a conexão na constante `conexao`.
const conexao = await conectarAoBanco(process.env.CONNECTION_STRING);

export async function getSongs() {
  // **Busca todos os songs:**
  // - Obtém o banco de dados "spotifyAula" da conexão.
  const db = conexao.db("spotifyAula");
  // - Obtém a coleção "songs" do banco de dados.
  const colecao = db.collection("songs");
  // - Realiza uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
  return colecao.find().toArray();
}

export async function criarSong(song) {
  // **Cria um novo post:**
  // - Obtém o banco de dados "spotifyAula" da conexão.
  const db = conexao.db("spotifyAula");
  // - Obtém a coleção "songs" do banco de dados.
  const colecao = db.collection("songs");
  // - Insere um novo documento (songs) na coleção e retorna um objeto com informações sobre a inserção.
  return colecao.insertOne(song);
}

export async function getArtists() {
  // **Busca todos os artists:**
  // - Obtém o banco de dados "spotifyAula" da conexão.
  const db = conexao.db("spotifyAula");
  // - Obtém a coleção "artists" do banco de dados.
  const colecao = db.collection("artists");
  // - Realiza uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
  return colecao.find().toArray();
}

export async function criarArtista(artist) {
  // **Cria um novo post:**
  // - Obtém o banco de dados "spotifyAula" da conexão.
  const db = conexao.db("spotifyAula");
  // - Obtém a coleção "artists" do banco de dados.
  const colecao = db.collection("artists");
  // - Insere um novo documento (post) na coleção e retorna um objeto com informações sobre a inserção.
  return colecao.insertOne(artist);
}