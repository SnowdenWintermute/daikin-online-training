import React from "react";
// import { useDispatch } from "react-redux";
import LessonCard from "./LessonCard";

const Lessons = () => {
  const lessons = ["Chillers", "Heaters"];

  return (
    <div className="lessons-holder">
      {lessons.map((lesson, i) => (
        <LessonCard key={i} title={lesson} />
      ))}
    </div>
  );
};

export default Lessons;
