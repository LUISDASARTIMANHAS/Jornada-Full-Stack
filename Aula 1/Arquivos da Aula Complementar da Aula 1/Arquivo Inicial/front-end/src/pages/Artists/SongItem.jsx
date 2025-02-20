import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ _id, name, image, duration, artist, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem do album da música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p className="song-item__duration">{duration}</p>
    </Link>
  );
};

export default SongItem;
