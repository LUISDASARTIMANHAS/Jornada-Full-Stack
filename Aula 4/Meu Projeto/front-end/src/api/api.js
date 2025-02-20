import axios from "axios";

const url = "http://localhost:3001";
const resArtists = await axios.get(`${url}/artists`);
const resSongs = await axios.get(`${url}/songs`);
export const artistArray = resArtists.data;
export const songsArray = resSongs.data;
