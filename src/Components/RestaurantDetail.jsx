import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMG_LINK } from "../config";

const RestaurantDetail = () => {
  const param = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState();
  useEffect(() => {
    resData();
  }, []);
  const resData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${param.id}&submitAction=ENTER`
    );
    const data = await response.json();
    console.log(data.data.cards[0].card.card.info);
    setRestaurantInfo(data.data.cards[0].card.card.info);
  };
  if (!restaurantInfo) {
    return null;
  }
  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatings,
    expectationNotifiers,
    costForTwoMessage,
    cloudinaryImageId,
    isOpen,
    city,
    labels,
  } = restaurantInfo;
  return (
    <div>
      <div className="main-card-restaurant-details">
        <div className="restaurant_image">
          <img
            src={RESTAURANT_IMG_LINK + cloudinaryImageId}
            alt="retaurent image"
            width="100%"
            height="100%"
          />
        </div>
        <div className="two_div_parent">
        <div className="basic_info">
          <div className="left_div-restaurant-details">
            <h3 className="restaurant_name">{name} ({isOpen ? "Opened" : "Closed"}) </h3>
            <i className="restaurant_cuisines">{cuisines.join(" , ")}</i>
            <address>
              {areaName} {sla.lastMileTravelString}
            </address>
            <p>{expectationNotifiers[0].text}</p>
          </div>
          <div className="right_div-restaurant-details">
            <h4 className="average_rating">★{avgRating}</h4>
            <p className="total_rating">{totalRatings}+</p>
          </div>
        </div>
        <div className="basic_offer_div">
          <h3>Expected Delivery Time : {sla.deliveryTime} min</h3>
          <h3>Active Offer : {costForTwoMessage} - Grab Now!</h3>
        </div>
        </div>
        <address className="address">
          city: {city}, <br />
          area : {areaName} <br />
          address: {labels[1].message}
        </address>
      </div>
    </div>
  );
};

export default RestaurantDetail;
