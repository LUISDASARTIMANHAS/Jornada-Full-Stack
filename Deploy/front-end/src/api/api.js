import axios from "axios";
const { VITE_ENV } = import.meta.env; // não process.env
const url = VITE_ENV === "development" ? "http://localhost:3001/api" : "/api";
let artistArray = [];
let songsArray = [];

try {
  // const { NODE_ENV } = process.env;
  const resArtists = await axios.get(`${url}/artists`);
  const resSongs = await axios.get(`${url}/songs`);
  artistArray = resArtists.data;
  songsArray = resSongs.data;
} catch (error) {
  console.error("Erro ao buscar dados da API: ", error);
  await axios
    .post(`${url}/telemetria`, "Erro ao buscar dados da API: " + error)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
export {artistArray,songsArray};