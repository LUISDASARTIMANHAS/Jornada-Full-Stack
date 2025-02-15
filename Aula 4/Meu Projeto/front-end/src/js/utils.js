/* eslint-disable no-unused-vars */
import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

function getSongsArrayFromArtist(artist) {
  return songsArray.filter((currSongObj) => currSongObj.artist === artist);
}

function getSongById(id) {
  return songsArray.filter((currSongObj) => currSongObj.id === Number(id))[0];
}

// get artists
function getArtistById(id){
  return artistArray.filter(
      (currArtistObj) => currArtistObj.id === Number(id)
    )[0];
}

function getArtistByName(name) {
  return artistArray.filter((currArtistObj) => currArtistObj.name === name)[0];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomBin(max) {
  return Math.floor(Math.random() * max).toString(2);
}

function getRandomHex(max) {
  return Math.floor(Math.random() * max).toString(16);
}

export {
  getRandomInt,
  getRandomBin,
  getRandomHex,
  getArtistByName,
  getArtistById,
  getSongsArrayFromArtist,
  getSongById,
};
