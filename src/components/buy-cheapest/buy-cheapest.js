import React from "react";
import "./buy-cheapest.css";

const BuyCheapest = ({ products }) => {
  // const { products } = props;
  const buyCheapestClicked = () => {
    console.log(products);
  };

  return (
    <div className="cheapest__wrapper">
      <input
        type="submit"
        value="Buy cheapest"
        className="cheapest__btn"
        onClick={buyCheapestClicked}
      ></input>
    </div>
  );
};

export default BuyCheapest;
