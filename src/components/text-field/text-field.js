import React from "react";
import "./text-field.css";

const TextField = (props) => {
  const {
    onChange,
    value,
    name,
    placeholder,
    onBlur,
    onFocus,
    isError,
    textError,
  } = props;

  const cls = `inputs ${isError ? "unvalid" : ""} ${
    !isError && value.length ? "valid" : ""
  }`;

  return (
    <label className="label__field">
      <input
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type="text"
        className={cls}
        placeholder={placeholder}
        name={name}
        onFocus={onFocus}
      ></input>
      {isError && <span className="error__input name__error">{textError}</span>}
    </label>
  );
};

export default TextField;
