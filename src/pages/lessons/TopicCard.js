import React from "react";
import { Link } from "react-router-dom";
import "./lessons.css";

const TopicCard = ({ title, img }) => {
  return (
    <Link className="lesson-card-link" to={`/lessons/${title.toLowerCase()}`}>
      <div className="lesson-card">
        {/* <h3>Topic</h3> */}
        <h2 className="lesson-card-title">{title}</h2>
        {img ? <img src={img} alt={title} /> : null}
      </div>
    </Link>
  );
};

export default TopicCard;
