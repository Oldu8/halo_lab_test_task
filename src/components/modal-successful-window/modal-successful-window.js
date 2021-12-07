import React from "react";
import "./modal-successful-window.css";

const SuccessfulWindow = (props) => {
  const { isActive, closeSuccessful } = props;
  if (!isActive) return null;
  return (
    <section className="successful__wrapper active" onClick={closeSuccessful}>
      <div
        className="successful__window active"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="headline__successful">Thank you for your order!</h2>
      </div>
    </section>
  );
};

export default SuccessfulWindow;
