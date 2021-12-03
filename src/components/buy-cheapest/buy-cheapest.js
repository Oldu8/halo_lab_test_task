import React, { useState } from "react";
import "./buy-cheapest.css";

const BuyCheapest = ({ products, createBuyWindow }) => {
  const [cheapestProduct, setProduct] = useState({});

  const buyCheapestClicked = () => {
    const cheapestProduct = [...products].sort((a, b) => a.price - b.price)[0];
    setProduct(cheapestProduct);
    createBuyWindow();
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
