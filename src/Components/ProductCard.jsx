import React from "react";
import { RESTAURANT_IMG_LINK } from "../config";
import { Link } from "react-router-dom";

const ProductCard = ({ restaurantData }) => {
  const {
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    cloudinaryImageId,
    id
  } = restaurantData;
  
  return (
    <>
      <Link className="routepath" to={"restaurant/" + id}>
      <div className="main-div-card">
        <div className="food-image">
          <img
            src={RESTAURANT_IMG_LINK + cloudinaryImageId}
            alt="food image"
            height="auto"
            width="100%"
          />
        </div>
        <div className="resturant_name">
          <b>{name}</b>
        </div>
        <div className="cuisines">
          <i>{cuisines.join(" , ")}</i>
        </div>
        <div className="more-info">
          <em className="rating">★ {avgRating}</em>
          <p className="distance">{slaString}</p>
          <p className="double-offer">{costForTwoString}</p>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ProductCard;
