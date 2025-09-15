import axios from "axios";
const { VITE_ENV } = import.meta.env; // não process.env
const url = VITE_ENV === "development" ? "http://localhost:3001/api" : "/api";
let artistArray = [];
let songsArray = [];

try {
  // const { NODE_ENV } = process.env;
  const resArtists = await get(`${url}/artists`);
  const resSongs = await get(`${url}/songs`);
  artistArray = resArtists;
  songsArray = resSongs;
} catch (error) {
  console.error("Erro ao buscar dados da API: ", error);
}

async function get(url) {
  try {
    const response = await axios.get(url, {
      headers: { Accept: "application/json" }, // força o servidor a responder JSON
    });

    // se não tiver data ou não for objeto/array, considera erro
    if (typeof response.data !== "object") {
      throw new Error(`Resposta não é JSON: ${response.data}`);
    }

    return response.data;
  } catch (error) {
    telemetria(error.message);
  }
}

async function telemetria(error) {
  await axios
    .post(`${url}/telemetria`, "Erro ao buscar dados da API: " + error)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export { artistArray, songsArray };
