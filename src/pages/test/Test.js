import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Test = ({ match }) => {
  const history = useHistory();
  const lesson = match.params.lesson;
  const quiz = useSelector((state) => state.quiz[lesson]);
  const quizIsComplete = useSelector((state) => state.quiz[lesson]?.isComplete);

  useEffect(() => {
    if (!quiz || !quiz.isComplete) history.push(`/lessons/${lesson}`);
  }, [history, lesson, quiz]);

  return (
    <div>
      <h2>Test for lesson: {lesson}</h2>
      <h3>Quiz complete: {quizIsComplete.toString()}</h3>
    </div>
  );
};

export default Test;
