import React, { useState } from "react";
import "./modal-buy-window.css";
import TYPage from "../modal-ty-window";

const intialFormData = {
  userName: "",
  userPhone: "",
};

const errorText = {
  userName: "Неверное имя",
  userPhone: "Некоректный номер",
};

const checkFunctions = {
  userName: (value) => {
    const regex = /[A-Za-z]+$/;
    return !!(value.length > 3 && value.length < 8) && regex.test(value);
  },
  userPhone: (value) => {
    const regex = /^[0-9]+$/;
    return !!(value.length > 8 && value.length < 12) && regex.test(value);
  },
};

const ModalBuyWindow = (props) => {
  const { isActive, chosenItem, closeModal } = props;
  const { name, category, price } = { ...chosenItem };

  const [isActiveTYPage, setTYActive] = useState(false);

  /// state for validate form

  const [formData, setFormData] = useState(intialFormData);
  const [error, setError] = useState([]);

  const handleChange = (event) => {
    setError([]);
    setFormData((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const isValid = checkFunctions[name](value);
    if (!isValid) {
      setError((arr) => {
        return [...arr, name];
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (formData.userName && formData.userPhone && !error.length) {
      setError([]);
      setFormData(intialFormData);
      setTYActive(true);
    }
  };
  /// main return

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
        <div className="user__block">
          <form className="input__form" onSubmit={onSubmit}>
            {error.includes("userName") && (
              <div className="error__input">{errorText["userName"]}</div>
            )}
            <input
              onChange={handleChange}
              value={formData.userName}
              onBlur={handleBlur}
              type="text"
              className="name__user inputs"
              placeholder="Your name"
              name="userName"
            ></input>
            {error.includes("userPhone") && (
              <div className="error__input">{errorText["userPhone"]}</div>
            )}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.userPhone}
              type="tel"
              className="phone__user inputs"
              placeholder="Your phone"
              name="userPhone"
            ></input>
            <button type="submit" className="order__btn">
              Make order
            </button>
          </form>
        </div>
      </div>
      <TYPage isActive={isActiveTYPage} setActive={setTYActive} />
    </section>
  );
};

export default ModalBuyWindow;
