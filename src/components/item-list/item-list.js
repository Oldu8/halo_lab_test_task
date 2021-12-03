import React from "react";
import Item from "../item";
import "./item-list.css";

const ItemList = (props) => {
  const { products, createModalBuyWindow } = props;

  return (
    <ul className="catalog">
      {products.map((item) => {
        return (
          <li key={item.name}>
            <Item
              {...item}
              id={item.name} // used item.name because thearen`t ids in server response
              createBuyWindow={createModalBuyWindow}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ItemList;
