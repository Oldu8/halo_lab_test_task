import React, { useState } from "react";
import "./input-form.css";
import OrderButton from "../order-button/";
import TextField from "../text-field";

const intialFormData = {
  userName: "",
  userPhone: "",
};

const errorMessage = {
  userName: "Only letters allowed",
  userNameEmpty: "This field is required",
  userNameShort: "Should contain 2-11 letters",
  userPhone: "Only numbers allowed",
  userPhoneEmpty: "This field is required",
  userPhoneShort: "Should contain 12 characters",
};

const checkValid = {
  userName: (value) => {
    const regex = /[A-Za-z]+$/;
    return regex.test(value);
  },
  userPhone: (value) => {
    const regexp = /^[0-9]+$/;
    return regexp.test(value);
  },
};

const checkLength = {
  userName: (value) => {
    return !!(value.length >= 2 && value.length < 11);
  },
  userPhone: (value) => {
    return value.length === 12;
  },
};

const InputForm = (props) => {
  const { chosenItem, closeModalWindow, createSuccessfulWindow } = props;
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
    const isShort = checkLength[name](value);

    if (!isEmpty) {
      setError((arr) => {
        return [...arr, `${name}Empty`];
      });
    } else if (!isValid) {
      setError((arr) => {
        return [...arr, name];
      });
    } else if (!isShort) {
      setError((arr) => {
        return [...arr, `${name}Short`];
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!formData.userName && !formData.userPhone) {
      return setError((ers) => {
        return [...ers, "userNameEmpty", "userPhoneEmpty"];
      });
    }
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
      createSuccessfulWindow();
      console.log(`You bought ${name} from ${category} 
        by ${price}. Ty ${formData.userName} we will call you by your number: ${formData.userPhone}`);
      closeModalWindow();
    }
  };

  const removeChosenError = (errorName) => {
    setError((ers) => {
      return ers
        .filter((el) => el !== errorName)
        .filter((el) => el !== `${errorName}Empty`)
        .filter((el) => el !== `${errorName}Short`);
      // не знаю, почему не сработал фильтр, который был:
      // .filter((el) => el !== errorName ||  el !== `${errorName}Empty`) ||  el !== `${errorName}Short`) поэтому разбил на 3
    });
  };

  const onFocus = (event) => {
    const { name } = event.target;
    removeChosenError(name);
  };

  return (
    <section>
      <div className="user__block">
        <form className="input__form" onSubmit={onSubmit}>
          <TextField
            onChange={handleChange}
            value={formData.userName}
            onBlur={handleBlur}
            name="userName"
            placeholder="Name"
            onFocus={onFocus}
            isError={
              errors.includes("userName") ||
              errors.includes("userNameEmpty") ||
              errors.includes("userNameShort")
            }
            textError={
              (errors.includes("userName") && errorMessage["userName"]) ||
              (errors.includes("userNameEmpty") &&
                errorMessage["userNameEmpty"]) ||
              (errors.includes("userNameShort") &&
                errorMessage["userNameShort"])
            }
          />
          <TextField
            onChange={handleChange}
            value={formData.userPhone}
            onBlur={handleBlur}
            name="userPhone"
            placeholder="Phone"
            onFocus={onFocus}
            isError={
              errors.includes("userPhone") ||
              errors.includes("userPhoneEmpty") ||
              errors.includes("userPhoneShort")
            }
            textError={
              (errors.includes("userPhone") && errorMessage["userPhone"]) ||
              (errors.includes("userPhoneEmpty") &&
                errorMessage["userPhoneEmpty"]) ||
              (errors.includes("userPhoneShort") &&
                errorMessage["userPhoneShort"])
            }
          />
          <OrderButton />
        </form>
      </div>
    </section>
  );
};

export default InputForm;
