import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./multipleChoice.css";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { setAnswerToQuestion } from "../../../store/actions/quiz";

const MultipleChoice = ({ question, id }) => {
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const quiz = useSelector((state) => state.quiz);

  useEffect(() => {
    if (quiz[id]?.index === question.correctAnswerIndex) setIsCorrect(true);
    else setIsCorrect(false);
  }, [quiz, id, question.correctAnswerIndex]);

  const handleChange = (event) => {
    let newSelectedIndex;
    question.answers.forEach((answer, i) => {
      if (answer.value === event.target.value) newSelectedIndex = i;
    });
    dispatch(
      setAnswerToQuestion({ id, currSelectedIndex: newSelectedIndex, value: event.target.value })
    );
  };

  return (
    <div>
      <h2 className={isCorrect ? "correct-answer" : ""}>{question.questionText}</h2>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Answer</FormLabel> */}
        <RadioGroup
          aria-label="gender"
          name="Answer"
          value={quiz[id]?.value || null}
          onChange={handleChange}
        >
          {question.answers.map((answer, i) => {
            return (
              <FormControlLabel
                value={answer.value}
                key={i}
                control={<Radio />}
                label={answer.label}
                className={
                  isCorrect && i === question.correctAnswerIndex ? "selected-correct-answer" : ""
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
