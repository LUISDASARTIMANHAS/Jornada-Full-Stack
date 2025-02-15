/* eslint-disable no-unused-vars */
import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = () => {
  return (
    <main className="main">
      {/* Item list de artistas */}
      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/* Item list de musicas */}
      <ItemList
        title="MÚsicas"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </main>
  );
};

export default Main;
