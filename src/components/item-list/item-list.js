import React from "react";
import Item from "../item";
import "./item-list.css";

export default class ItemList extends React.Component {
  render() {
    const { products } = this.props;
    let itemKey = 0;
    const elements = products.map((item) => {
      itemKey++;
      return (
        <li key={itemKey}>
          <Item {...item} />
        </li>
      );
    });
    return <ul className="catalog">{elements}</ul>;
  }
}
