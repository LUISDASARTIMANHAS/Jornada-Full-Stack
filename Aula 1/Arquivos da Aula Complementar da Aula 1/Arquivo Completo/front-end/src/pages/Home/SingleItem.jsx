import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = ({ path, image, name, type, _id, artist, style }) => {
  return (
    <Link to={`${path}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            src={image}
            alt={`Imagem de ${name}`}
            className={`single-item__image ${
              style === "square" ? "single-item__image--square" : ""
            }`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{type ?? artist}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
