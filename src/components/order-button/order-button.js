import React from "react";
import "./order-button.css";

const OrderButton = () => {
  return (
    <button type="submit" className="order__btn">
      <span className="arrow__hover"></span>
      Order
    </button>
  );
};

export default OrderButton;
