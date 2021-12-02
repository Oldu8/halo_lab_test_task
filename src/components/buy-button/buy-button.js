import React from "react";
import "./buy-button.css";

const BuyButton = ({ id, createBuyWindow }) => {
  const buyButtonClicked = () => {
    createBuyWindow(id);
  };

  return (
    <input
      type="submit"
      value="BUY"
      className="buy__btn btn"
      onClick={buyButtonClicked}
    ></input>
  );
};

export default BuyButton;
