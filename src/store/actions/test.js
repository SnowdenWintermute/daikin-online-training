import { SET_ANSWER_TO_TEST_QUESTION } from "./types";

export const setAnswerToTestQuestion =
  ({ lesson, id, currSelectedIndex, value, correctAnswerIndex }) =>
  (dispatch) => {
    dispatch({type:SET_ANSWER_TO_TEST_QUESTION,payload: { lesson, id, currSelectedIndex, value, correctAnswerIndex }})
  };
