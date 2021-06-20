import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./multipleChoice.css";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { setAnswerToQuestion } from "../../../store/actions/quiz";

const MultipleChoice = ({ question, id }) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const lesson = useSelector((state) => state.lessons.currentLesson);
  const isCorrect = useSelector((state) =>
    state.quiz && state.quiz[lesson] && state.quiz[lesson].answers
      ? state.quiz[lesson]?.answers[id]?.isCorrect
      : false
  );

  const handleChange = (event) => {
    let newSelectedIndex;
    question.answers.forEach((answer, i) => {
      if (answer.value === event.target.value) newSelectedIndex = i;
    });
    dispatch(
      setAnswerToQuestion({
        lesson,
        id,
        currSelectedIndex: newSelectedIndex,
        value: event.target.value,
        correctAnswerIndex: question.correctAnswerIndex,
        page: question.page,
      })
    );
  };

  return (
    <div className="question-box">
      <h2 className={isCorrect ? "correct-answer" : ""}>
        {question.questionText} {question.id}
      </h2>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Answer</FormLabel> */}
        <RadioGroup
          aria-label="gender"
          name="Answer"
          value={
            quiz[lesson] && quiz[lesson].answers ? quiz[lesson].answers[id]?.value || null : null
          }
          onChange={handleChange}
        >
          {question.answers.map((answer, i) => {
            return (
              <FormControlLabel
                value={answer.value}
                key={i}
                control={<Radio color="default" />}
                label={answer.label}
                className={
                  isCorrect && i === question.correctAnswerIndex
                    ? "selected-correct-answer"
                    : "radio-label"
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
