import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./lessons.css";

const LessonCard = ({ title, img }) => {
  const quiz = useSelector((state) => state.quiz);
  const [totalNumQuestions, setTotalNumQuestions] = useState(null);

  useEffect(() => {
    let newTotal = 0;
    if (!quiz[title.toLowerCase()]) return;
    Object.keys(quiz[title.toLowerCase()].questionIdsByPage).forEach((key) => {
      quiz[title.toLowerCase()].questionIdsByPage[key].forEach((question) => (newTotal += 1));
    });
    setTotalNumQuestions(newTotal);
  }, [quiz, title]);

  return (
    <Link className="lesson-card-link" to={`/quiz/${title.toLowerCase()}`}>
      <div className="lesson-card">
        {/* <h3>Lesson</h3> */}
        <h2 className="lesson-card-title">{title}</h2>
        {quiz[title.toLowerCase()] && (
          <p>
            {quiz[title.toLowerCase()] ? quiz[title.toLowerCase()].numQuestionsCorrect || 0 : 0} /{" "}
            {totalNumQuestions}
          </p>
        )}
        {!quiz[title.toLowerCase()] && "Not yet started"}
        {img ? <img src={img} alt={title} /> : null}
      </div>
    </Link>
  );
};

export default LessonCard;
