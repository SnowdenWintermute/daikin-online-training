import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Test = ({ match }) => {
  const lesson = match.params.lesson;
  const quiz = useSelector((state) => state.quiz[lesson]);
  const quizIsComplete = useSelector((state) => state.quiz[lesson]?.isComplete);

  useEffect(() => {
    if (!quiz) {
      console.log("no quiz data");
    }
    if (!quiz.isComplete) {
      console.log("not all answers correct for quiz");
    }
    console.log(quizIsComplete);
  });

  return (
    <div>
      <h2>Test for lesson: {lesson}</h2>
      <h3>Quiz complete: {quizIsComplete.toString()}</h3>
    </div>
  );
};

export default Test;
