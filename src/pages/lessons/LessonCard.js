import React from "react";
import { Link } from "react-router-dom";
import "./lessons.css";

const LessonCard = ({ title, img }) => {
  return (
    <Link className="lesson-card-link" to={`/quiz/${title.toLowerCase()}`}>
      <div className="lesson-card">
        <h2 className="lesson-card-title">{title}</h2>
        {img ? <img src={img} alt={title} /> : null}
      </div>
    </Link>
  );
};

export default LessonCard;
