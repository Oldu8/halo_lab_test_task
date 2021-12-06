import React, { Component } from "react";
import GetData from "../../get-data";
import "./app.css";
import Header from "../header";
import ItemList from "../item-list";
import ModalBuyWindow from "../modal-buy-window";
import SuccessfulWindow from "../modal-successful-window";
import BuyCheapest from "../buy-cheapest";
import Footer from "../footer";

export default class App extends Component {
  state = {
    products: [],
    modalBuyWindow: false,
    itemForModal: {},
    successfulWindow: false,
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

  closeSuccessfulWindow = () => {
    this.setState({
      successfulWindow: false,
    });
  };

  render() {
    const { products, modalBuyWindow, itemForModal, successfulWindow } =
      this.state;
    const closeModalBuyWindow = this.closeModalBuyWindow;
    const closeSuccessfulWindow = this.closeSuccessfulWindow;

    const createSuccessfulWindow = () => {
      this.setState({
        successfulWindow: true,
      });
      setTimeout(() => {
        this.setState({
          successfulWindow: false,
        });
      }, 3000);
    };

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
          createSuccessfulWindow={createSuccessfulWindow}
        />
        <SuccessfulWindow
          chosenItem={itemForModal}
          isActive={successfulWindow}
          closeSuccessful={closeSuccessfulWindow}
        />
        <BuyCheapest
          products={products}
          createModalBuyWindow={(id) => createModalBuyWindow(id)}
        />
        <Footer />
      </section>
    );
  }
}
