import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCT_DATA_API_ENDPOINT } from "../config";
import Shimmer from "./Shimmer";

const AllProducts = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
  const fetchingData = async () => {
    try {
      const response = await fetch(PRODUCT_DATA_API_ENDPOINT);
      const data = await response.json();
      setRestaurantData(data.data.cards[2].data.data.cards);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick =()=>{

  }
  return restaurantData.length <=0? <Shimmer/> : (
      <div className="parent_div_card">
        {restaurantData.map((value) => {
          return (
            <ProductCard key={value.data.id} restaurantData={value.data} />
          );
        })}
      </div>
  );
};

export default AllProducts;
