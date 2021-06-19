import { SET_ANSWER_TO_QUESTION } from "./types";

export const setAnswerToQuestion =
  ({ id, currSelectedIndex, value }) =>
  (dispatch) => {
    dispatch({
      type: SET_ANSWER_TO_QUESTION,
      payload: {
        id,
        currSelectedIndex,
        value,
      },
    });
  };
