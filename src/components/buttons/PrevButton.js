import React from "react";
import "./buttons.css";

const PrevButton = ({ onClick, disabled }) => {
  return (
    <button className="button prev-button" onClick={onClick} disabled={disabled}>
      Back
    </button>
  );
};

export default PrevButton;
