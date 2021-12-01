import React from "react";
import "./modal-ty-window.css";

const TYPage = (props) => {
  const { isActive, setActive } = props;
  return (
    <section
      className={isActive ? "ty__wrapper active" : "ty__wrapper"}
      onClick={() => setActive(false)}
    >
      <div
        className={isActive ? "ty__window active" : "ty__window"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="headline__ty">Thank you for your order!</h2>
        <h2 className="headline__ty"> We will call you</h2>
      </div>
    </section>
  );
};

export default TYPage;
