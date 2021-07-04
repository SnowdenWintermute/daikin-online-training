import React from "react";
import "./multipleChoice.css";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const MultipleChoice = ({
  question,
  id,
  value,
  showCorrect,
  showIncorrect,
  handleChange,
  disabled,
}) => {
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
          value={value || null}
          onChange={(event) => handleChange(event, question, id)}
        >
          {question.answers.map((answer, i) => {
            let classname = "radio-label";
            if (showCorrect && i === question.correctAnswerIndex)
              classname = "selected-correct-answer";
            else if (showIncorrect && value === answer.value)
              classname = "selected-incorrect-answer";
            return (
              <FormControlLabel
                value={answer.value}
                key={i}
                control={<Radio color="default" disabled={disabled} />}
                label={answer.value}
                className={classname}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MultipleChoice;
