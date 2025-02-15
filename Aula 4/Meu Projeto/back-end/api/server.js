// API significa Application Programming Interface
import express from "express";
const app = express();

const {
  checkHeaderMiddleware,
  httpsSecurityMiddleware,
  discordLogs,
  autoLoader,
} = require("npm-package-nodejs-utils-lda");
// const hostname = "127.0.0.1"; só local
// const hostname = "0.0.0.0"; Bind na placa de rede
// const hostname = "::"; bind ipv4 e ipv6 pra fora
const hostname = "::";
const porta = process.env.PINGOBRAS_SG_PORTA;
const dinamicPort = porta || 8080;

const date = new Date();
const dia = date.getDate().toString().padStart(2, "0") - 1;
const dia7 = (date.getDate() - 7).toString().padStart(2, "0") - 1;
const mes = (date.getMonth() + 1).toString().padStart(2, "0");
const ano = date.getFullYear();
const setCacheHeaders = (req, res, next) => {
  console.log("Adicionando header Cache de 1 dia");
  const cacheDuration = 60 * 60 * 24; // 1 dia em segundos
  res.set("Cache-Control", `public, max-age=${cacheDuration}`);
  res.set("Cache-time", cacheDuration);
  next();
};
app.use(express.urlencoded({ extended: true }));

// app.use(cacheMiddleware);
app.use(setCacheHeaders);
app.use(httpsSecurityMiddleware);
app.use(ddosModule().express);

app.use(express.json());
autoEditais(dia, dia7, mes, ano);
checkHeaderMiddleware(app);
app.use(pingobrasSystems);

// Carrega dinamicamente todos os módulos de rota
autoLoader(app);
var server = app.listen(dinamicPort, hostname, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Servidor rodando em http://%s:%s", hostname, port);
  console.log("IP Obtido: http://%s:%s", host, port);
  discordLogs("START", `Servidor rodando em http://${hostname}:${port}`);
});
