import React, { useState } from "react";
import "./modal-buy-window.css";
import InputForm from "../input-form";

const ModalBuyWindow = (props) => {
  const { isActive, chosenItem, closeModal } = props;
  const { name, category, price } = { ...chosenItem };

  return (
    <section
      className={isActive ? "modal__wrapper active" : "modal__wrapper"}
      onClick={() => closeModal(false)}
    >
      <div
        className={isActive ? "modal__window active" : "modal__window"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="product__block">
          <h4 className="category__headline">{category}</h4>
          <h3 className="name__headline">{name}</h3>
          <h4 className="price__headline">{price}</h4>
        </div>
        <InputForm />
      </div>
    </section>
  );
};

export default ModalBuyWindow;
