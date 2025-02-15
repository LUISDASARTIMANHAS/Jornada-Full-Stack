/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
  return (
    <main className="main">
      {/* Item list de artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item list de musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="MÚsicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
