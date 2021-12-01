import React, { Component } from "react";
import GetData from "../../get-data";
import "./app.css";
import Header from "../header";
import ItemList from "../item-list";
import ModalBuyWindow from "../modal-buy-window";

export default class App extends Component {
  state = {
    products: [
      {
        name: "Orange Juice",
        category: "Drinks",
        price: 14.99,
      },
      {
        name: "Apples",
        category: "fruits",
        price: 4.99,
      },
      {
        name: "Tomatos",
        category: "vegetables",
        price: 6.39,
      },
      {
        name: "Coffee",
        category: "Drinks",
        price: 3.15,
      },
      {
        name: "Sweet Paper",
        category: "Vegetables",
        price: 12.15,
      },
      {
        name: "Grapes",
        category: "FRUITS",
        price: 20.49,
      },
      {
        name: "Pears",
        category: "Fruits",
        price: 1.35,
      },
      {
        name: "Team",
        category: "Drinks",
        price: 0.4,
      },
    ],
    modalBuyWindow: false,
    itemForModal: {},
  };

  constructor() {
    super();
    // this.updateData();
  }

  // getData = new GetData();
  // updateData() {
  //   this.getData.getAllProducts().then((data) => {
  //     this.setState({ products: data });
  //   });
  // }

  closeModalBuyWindow = () => {
    this.setState({
      modalBuyWindow: false,
    });
  };

  render() {
    const { products, modalBuyWindow, itemForModal } = this.state;
    // const createModalBuyWindow = this.createModalBuyWindow;
    const closeModalBuyWindow = this.closeModalBuyWindow;

    const createModalBuyWindow = (id) => {
      const chosenItem = products[id - 1];
      console.log(chosenItem);
      this.setState({
        modalBuyWindow: true,
        itemForModal: chosenItem,
      });
    };

    return (
      <section>
        <Header />
        <ItemList
          products={products}
          createModalBuyWindow={(id) => createModalBuyWindow(id)}
        />
        <ModalBuyWindow
          isActive={modalBuyWindow}
          chosenItem={itemForModal}
          closeModal={closeModalBuyWindow}
        />
      </section>
    );
  }
}
