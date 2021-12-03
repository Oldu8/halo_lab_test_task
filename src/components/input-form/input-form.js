import React, { useState } from "react";
import "./input-form.css";
import TYPage from "../modal-ty-window";
import OrderButton from "../order-button/";

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

const checkValid = {
  userName: (value) => {
    const regex = /[A-Za-z]+$/;
    return !!(value.length >= 2 && value.length < 11) && regex.test(value);
  },
  userPhone: (value) => {
    const regex = /^[0-9]+$/;
    return value.length === 12 && regex.test(value);
  },
};

const InputForm = (props) => {
  const [isActiveTYPage, setTYActive] = useState(false);
  const { chosenItem, closeModalWindow } = props;
  const { name, category, price } = { ...chosenItem };

  /// state for validate form

  const [formData, setFormData] = useState(intialFormData);
  const [errors, setError] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    removeChosenError(name);
    setFormData((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const isEmpty = !!value.length;
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
    event.preventDefault();
    if (!formData.userName) {
      return setError((ers) => {
        return [...ers, "userNameEmpty"];
      });
    }
    if (!formData.userPhone) {
      return setError((ers) => {
        return [...ers, "userPhoneEmpty"];
      });
    }
    if (!errors.length) {
      setError([]);
      setFormData(intialFormData);
      setTYActive(true);
      const data = {
        name: formData.userName,
        phone: formData.userPhone,
        product: name,
      };
      console.log(`You bought ${name} from ${category} 
        by ${price}. Ty ${formData.userName} we will call you by your number: ${formData.userPhone}`);
      closeModalWindow();
    }
  };

  const removeChosenError = (errorName) => {
    setError((ers) => {
      return ers
        .filter((el) => el !== errorName)
        .filter((el) => el !== `${errorName}Empty`);
      // не знаю, почему не сработал фильтр, который был .filter((el) => el !== errorName ||  el !== `${errorName}Empty`) поэтому разбил на 2
    });
  };

  const onFocus = (event) => {
    const { name } = event.target;
    removeChosenError(name);
  };

  /// main return
  // Не успел вынести инпуты в отдельный компонент, было бы больше времени вынес и настроил через пропсы передачу всех функций.

  return (
    <section>
      <div className="user__block">
        <form className="input__form" onSubmit={onSubmit}>
          <input
            onChange={handleChange}
            value={formData.userName}
            onBlur={handleBlur}
            type="text"
            className={
              !errors.length && !formData.userName.length
                ? "name__user inputs"
                : !errors.length && formData.userName.length
                ? "name__user inputs valid"
                : "name__user inputs unvalid"
            }
            placeholder="Name"
            name="userName"
            onFocus={onFocus}
          ></input>
          {(errors.includes("userName") && (
            <div className="error__input name__error">
              {errorMessage["userName"]}
            </div>
          )) ||
            (errors.includes("userNameEmpty") && (
              <div className="error__input name__error">
                {errorMessage["userNameEmpty"]}
              </div>
            ))}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.userPhone}
            type="tel"
            className={
              !errors.length && !formData.userPhone.length
                ? "phone__user inputs"
                : !errors.length && formData.userPhone.length
                ? "phone__user inputs valid"
                : "phone__user inputs unvalid"
            }
            placeholder="Number"
            name="userPhone"
            onFocus={onFocus}
          ></input>
          {(errors.includes("userPhone") && (
            <div className="error__input number__error">
              {errorMessage["userPhone"]}
            </div>
          )) ||
            (errors.includes("userPhoneEmpty") && (
              <div className="error__input number__error">
                {errorMessage["userPhoneEmpty"]}
              </div>
            ))}
          <OrderButton />
        </form>
      </div>
      <TYPage isActive={isActiveTYPage} setActive={setTYActive} />
    </section>
  );

  // не успел вынести компонент TYPage, который по факту successful order нужно назвать, и поставить на него таймер, чтобы пропадал через 10с
};

export default InputForm;
