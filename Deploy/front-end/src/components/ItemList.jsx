/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((CurrentValue, Index) => Index < finalItems)
          .map((currObj, Index) => (
            <SingleItem
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${Index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
