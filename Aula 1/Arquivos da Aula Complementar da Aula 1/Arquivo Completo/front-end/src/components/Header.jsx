import React from "react";
import spotifyLogo from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img width="32" src={spotifyLogo} alt="Logo Spotify" />
      </Link>

      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
