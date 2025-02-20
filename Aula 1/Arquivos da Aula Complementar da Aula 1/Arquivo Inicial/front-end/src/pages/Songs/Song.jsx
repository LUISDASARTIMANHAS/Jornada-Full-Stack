import React from "react";
import { songsIndexedById } from "../../assets/database/songs";
import { artistsIndexedByName } from "../../assets/database/artists";
import { useParams, Link } from "react-router-dom";
import Player from "../../components/Player";

const Song = () => {
  const { id } = useParams();
  const { image, name, duration, artist, audio } = songsIndexedById[id];
  const artistObj = artistsIndexedByName[artist];
  const artistImage = artistObj.image;
  const artistId = artistObj._id;

  return (
    <section className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            className="song__image"
            width="300"
            src={image}
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link className="song__artist-image" to={`/artist/${artistId}`}>
          <img
            width="75"
            height="75"
            src={artistImage}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player duration={duration} audio={audio} artist={artist} id={id} />

        <div className="song__info">
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </section>
  );
};

export default Song;
