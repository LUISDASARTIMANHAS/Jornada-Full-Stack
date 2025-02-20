/* eslint-disable no-unused-vars */
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import React from "react";
import {
  getArtistById,
  getArtistByName,
  getRandomInt,
  getSongById,
  getSongsArrayFromArtist,
  getRamdomIdFromArtist,
} from "../js/utils";

const Artist = () => {
  const { id } = useParams();
  const { name, banner } = getArtistById(id);
  const songsArrayFromArtist = getSongsArrayFromArtist(name);
  const ramdomIdFromArtist = getRamdomIdFromArtist(name);

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${ramdomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
