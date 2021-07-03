import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import chillers from "../../content/tests/chillers.js";
import MultipleChoice from "../../components/questions/MultipleChoice/MultipleChoice.js";
import { setCurrentLesson } from "../../store/actions/lessons.js";
import {
  clearTestProgress,
  setAnswerToTestQuestion,
  setTotalNumQuestions,
} from "../../store/actions/test.js";
import "./test.css";

const Test = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const lesson = match.params.lesson.toLowerCase() || null;
  const quiz = useSelector((state) => state.quiz[lesson]);
  const quizIsComplete = useSelector((state) => state.quiz[lesson]?.isComplete);
  const test = useSelector((state) => state.test[lesson]);
  const [testContent, setTestContent] = useState(null);
  const allQuestionsAnswered = test?.isComplete;

  useEffect(() => {
    if (!quiz || !quiz.isComplete) history.push(`/lessons/${lesson}`);
  }, [history, lesson, quiz]);

  useEffect(() => {
    dispatch(setCurrentLesson(lesson));
    switch (lesson) {
      case "chillers":
        setTestContent(chillers);
        break;
      default:
    }
  }, [dispatch, lesson]);

  useEffect(() => {
    dispatch(setTotalNumQuestions({ lesson, testContent }));
  }, [dispatch, testContent, lesson]);

  const handleChange = (event, question, id) => {
    let newSelectedIndex;
    question.answers.forEach((answer, i) => {
      if (answer.value === event.target.value) newSelectedIndex = i;
    });
    dispatch(
      setAnswerToTestQuestion({
        lesson,
        id,
        currSelectedIndex: newSelectedIndex,
        value: event.target.value,
        correctAnswerIndex: question.correctAnswerIndex,
      })
    );
  };

  const clearTest = () => {
    dispatch(clearTestProgress(lesson));
    dispatch(setTotalNumQuestions({ lesson, testContent }));
  };

  return (
    <div className="test">
      <h2>Test for lesson: {lesson}</h2>
      <h3>Quiz complete: {quizIsComplete.toString()}</h3>
      <div className="test-questions-holder">
        {testContent &&
          testContent.map((item, i) => {
            item.id = i + 1;
            return (
              <MultipleChoice
                question={item}
                id={item.id}
                key={i}
                value={
                  test?.answers
                    ? test?.answers[item.id]
                      ? test?.answers[item.id].value
                      : null
                    : null
                }
                handleChange={handleChange}
              />
            );
          })}
      </div>
      <button className="button" disabled={!allQuestionsAnswered}>
        Submit Answers
      </button>
      <button className="button" onClick={clearTest}>
        Clear All Answers
      </button>
    </div>
  );
};

export default Test;
