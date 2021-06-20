import React from "react";
import "./imageCard.css";

const ImageCard = ({ src, title, caption }) => {
  return (
    <>
      <div className="image-card">
        <img src={src} alt={title} />
      </div>
      {caption && <div className="image-card-caption">{caption}</div>}
    </>
  );
};

export default ImageCard;
