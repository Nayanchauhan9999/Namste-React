import React from "react";

const Shimmer = () => {
  return (
    <div className="all_shimmer_parent">
      {Array(13)
        .fill("")
        .map((value,index) => (
          <div className="shimmer_main_div" key={index}>
            <div className="shimmer_image"></div>
            <div className="shimmer_title"></div>
            <div className="shimmer_rating"></div>
            <div className="shimmer_title"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
