import React, { useState } from "react";
import "./input-form.css";
import TYPage from "../modal-ty-window";

const intialFormData = {
  userName: "",
  userPhone: "",
};

const errorMessage = {
  userName: "Only letters allowed",
  userNameEmpty: "This field is required",
  userPhoneEmpty: "This field is required",
  userPhone: "Should contain 12 characters",
};

const checkEmpty = {
  userName: (value) => {
    if (!value.length) {
      return false;
    } else if (value.length) return true;
  },
  userPhone: (value) => {
    if (!value.length) {
      return false;
    } else if (value.length) return true;
  },
};

const checkValid = {
  userName: (value) => {
    const regex = /[A-Za-z]+$/;
    return !!(value.length > 2 && value.length < 11) && regex.test(value);
  },
  userPhone: (value) => {
    const regex = /^[0-9]+$/;
    return !!(value.length === 12) && regex.test(value);
  },
};

const InputForm = (props) => {
  const [isActiveTYPage, setTYActive] = useState(false);
  const { chosenItem, closeModalWindow } = props;
  const { name, category, price } = { ...chosenItem };

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
    const isEmpty = checkEmpty[name](value);
    const isValid = checkValid[name](value);

    if (!isEmpty) {
      setError((arr) => {
        return [...arr, `${name}Empty`];
      });
    } else if (!isValid) {
      setError((arr) => {
        return [...arr, name];
      });
    }
  };

  const onSubmit = (event) => {
    if (formData.userName && formData.userPhone && !error.length) {
      setError([]);
      setFormData(intialFormData);
      setTYActive(true);
      console.log(
        `You bought ${name} from ${category} 
        by ${price}. Ty ${formData.userName} we will call you by your number: ${formData.userPhone}`
      );
      closeModalWindow();
    }
    event.preventDefault();
  };
  /// main return

  return (
    <section>
      <div className="user__block">
        <form className="input__form" onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            value={formData.userName}
            onBlur={handleBlur}
            type="text"
            className="name__user inputs"
            placeholder="Name"
            name="userName"
          ></input>
          {(error.includes("userName") && (
            <div className="error__input name__error">
              {errorMessage["userName"]}
            </div>
          )) ||
            (error.includes("userNameEmpty") && (
              <div className="error__input name__error">
                {errorMessage["userNameEmpty"]}
              </div>
            ))}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.userPhone}
            type="tel"
            className="phone__user inputs"
            placeholder="Number"
            name="userPhone"
          ></input>
          {(error.includes("userPhone") && (
            <div className="error__input number__error">
              {errorMessage["userPhone"]}
            </div>
          )) ||
            (error.includes("userPhoneEmpty") && (
              <div className="error__input number__error">
                {errorMessage["userPhoneEmpty"]}
              </div>
            ))}
          <button type="submit" className="order__btn">
            Order
          </button>
        </form>
      </div>
      <TYPage isActive={isActiveTYPage} setActive={setTYActive} />
    </section>
  );
};

export default InputForm;
