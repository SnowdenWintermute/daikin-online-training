import React from "react";
import "./buttons.css";

const NextButton = ({ onClick, disabled }) => {
  return (
    <button className="button next-button" onClick={onClick} disabled={disabled}>
      Next
    </button>
  );
};

export default NextButton;
