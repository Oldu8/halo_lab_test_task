import React from "react";
import "./modal-successful-window.css";

const SuccessfulWindow = (props) => {
  const { isActive, chosenItem, closeSuccessful } = props;
  const { name, category, price } = { ...chosenItem };
  if (!isActive) return null;
  return (
    <section className="successful__wrapper active" onClick={closeSuccessful}>
      <div
        className="successful__window active"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="headline__successful">Thank you for your order!</h2>
        <h2 className="text__successful">
          You bought {name} from {category} by {price}$. Ty we *Name* will call
          you by your number: *number*
        </h2>
      </div>
    </section>
  );
};

export default SuccessfulWindow;
