import React from "react";
import "./videoCard.css";
const VideoCard = ({ src, title, dimensions }) => {
  return (
    <iframe
      className="video-card"
      title={title}
      width={dimensions.width}
      height={400}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoCard;
