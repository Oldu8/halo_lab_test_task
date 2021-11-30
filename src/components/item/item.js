import React from "react";
import "./item.css";
import BuyButton from "../buy-button";

const Item = ({ name, category, price }) => {
  return (
    <div className="product__item">
      <div className="product__nameBlock">
        <h4 className="category__product">{category}</h4>
        <h3 className="headline__product">{name}</h3>
      </div>
      <div className="product__priceBlock">
        <h4 className="price__product">{price}</h4>
        <BuyButton />
      </div>
    </div>
  );
};

export default Item;
