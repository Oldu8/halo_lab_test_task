import React, { Component } from "react";
import GetData from "../../get-data";
import "./app.css";
import Header from "../header";
import ItemList from "../item-list";
import ModalBuyWindow from "../modal-buy-window";
import BuyCheapest from "../buy-cheapest";
import Footer from "../footer";

export default class App extends Component {
  state = {
    products: [],
    modalBuyWindow: false,
    itemForModal: {},
  };

  getData = new GetData();
  componentDidMount() {
    this.getData.getAllProducts().then((data) => {
      this.setState({ products: data });
    });
  }

  closeModalBuyWindow = () => {
    this.setState({
      modalBuyWindow: false,
    });
  };

  render() {
    const { products, modalBuyWindow, itemForModal } = this.state;
    const closeModalBuyWindow = this.closeModalBuyWindow;

    const createModalBuyWindow = (id) => {
      const chosenItem = products.find((item) => item.name === id);
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
        <BuyCheapest products={products} />
        <Footer />
      </section>
    );
  }
}
