import React from "react";
import "./multipleChoice.css";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const MultipleChoice = ({ question, id, value, showCorrect, handleChange }) => {
  return (
    <div className="question-box">
      <h2 className={showCorrect ? "correct-answer" : ""}>
        {question.id}. {question.questionText}
      </h2>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Answer</FormLabel> */}
        <RadioGroup
          aria-label="gender"
          name="Answer"
          value={value}
          onChange={(event) => handleChange(event, question, id)}
        >
          {question.answers.map((answer, i) => {
            return (
              <FormControlLabel
                value={answer.value}
                key={i}
                control={<Radio color="default" />}
                label={answer.value}
                className={
                  showCorrect && i === question.correctAnswerIndex
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
