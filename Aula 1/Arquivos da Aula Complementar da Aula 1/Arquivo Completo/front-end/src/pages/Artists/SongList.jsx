import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [songsAmount, setSongsAmount] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((song, index) => index < songsAmount)
        .map((song, index) => (
          <SongItem {...song} index={index} key={`song-item-${song.name}`} />
        ))}

      <p className="song-list__see-more" onClick={() => setSongsAmount(10)}>
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
