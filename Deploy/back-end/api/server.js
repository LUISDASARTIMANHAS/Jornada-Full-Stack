// API significa Application Programming Interface
import express from "express";
import cors from "cors";
const app = express();

import {
  checkHeaderMiddleware,
  httpsSecurityMiddleware,
  discordLogs,
} from "npm-package-nodejs-utils-lda";
import { criarArtista, criarSong, getArtists, getSongs } from "./connect.js";
// const hostname = "127.0.0.1"; só local
// const hostname = "0.0.0.0"; Bind na placa de rede
// const hostname = "::"; bind ipv4 e ipv6 pra fora
const hostname = "::";
const porta = process.env.PORTA;
const dinamicPort = porta || 3002;

const setCacheHeaders = (req, res, next) => {
  console.log("Adicionando header Cache de 1 dia");
  const cacheDuration = 60 * 24; // 1 dia em segundos
  res.set("Cache-Control", `public, max-age=${60 *cacheDuration}`);
  res.set("Cache-time", 60 *cacheDuration);
  next();
};
app.use(express.urlencoded({ extended: true }));

// app.use(cacheMiddleware);
app.use(setCacheHeaders);
app.use(httpsSecurityMiddleware);
app.use(cors());

app.use(express.json());
checkHeaderMiddleware(app);

app.get("/artists",async (req, res) => {
  res.send(await getArtists());
});

app.get("/songs",async (req, res) => {
  res.send(await getSongs());
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


var server = app.listen(dinamicPort, hostname, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Servidor rodando em http://%s:%s", hostname, port);
  console.log("IP Obtido: http://%s:%s", host, port);
  discordLogs(
    "START SERVER BACKEND SPOTIFY",
    `Servidor rodando em http://${hostname}:${port}`
  );
});
