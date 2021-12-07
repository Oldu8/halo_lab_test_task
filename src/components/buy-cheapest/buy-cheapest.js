import React from "react";
import "./buy-cheapest.css";

const BuyCheapest = ({ products, createModalBuyWindow }) => {
  const buyCheapestClicked = () => {
    const newCheapestProduct = [...products].sort(
      (a, b) => a.price - b.price
    )[0];
    createModalBuyWindow(newCheapestProduct.name);
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
