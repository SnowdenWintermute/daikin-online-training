import React from "react";
import "./buttons.css";

const DangerButton = ({ text, onClick }) => {
  return (
    <button className="button button-danger" onClick={onClick}>
      {text}
    </button>
  );
};

export default DangerButton;
