import React from "react";
import SingleItem from "../pages/Home/SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemsList = ({
  title,
  path,
  itemsToShow,
  individualPath,
  type,
  itemsArray,
  style,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>

        {pathname === "/" ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((item, index) => index < itemsToShow)
          .map((itemObj) => (
            <SingleItem
              {...itemObj}
              type={type}
              path={individualPath}
              style={style}
              key={`single-item-${type ?? itemObj.artist}-${itemObj._id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsList;
