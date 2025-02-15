/* eslint-disable no-unused-vars */
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import React from "react";
import {
  getArtistByName,
  getRandomInt,
  getSongById,
  getSongsArrayFromArtist,
} from "../js/utils";

const Song = () => {
  const { id } = useParams();
  const { image, name, artist, audio, duration } = getSongById(id);

  const artistObj = getArtistByName(artist);

  const songsArrayFromArtist = getSongsArrayFromArtist(artist);
  const ramdomIndex = getRandomInt(songsArrayFromArtist.length - 1);
  const ramdomIndex2 = getRandomInt(songsArrayFromArtist.length - 1);

  const ramdomIdFromArtist = songsArrayFromArtist[ramdomIndex].id;
  const ramdomId2FromArtist = songsArrayFromArtist[ramdomIndex2].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song-image__container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song_artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          ramdomIdFromArtist={ramdomIdFromArtist}
          ramdomId2FromArtist={ramdomId2FromArtist}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
