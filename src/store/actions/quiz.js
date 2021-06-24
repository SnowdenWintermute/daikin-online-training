import { SET_PAGE_NUMBER, SET_QUESTION_IDS_BY_PAGE } from "./types";
import { SET_TOTAL_NUM_PAGES } from "./types";
import { SET_ANSWER_TO_QUESTION } from "./types";

export const setAnswerToQuestion =
  ({ lesson, id, currSelectedIndex, value, correctAnswerIndex }) =>
  (dispatch) => {
    dispatch({
      type: SET_ANSWER_TO_QUESTION,
      payload: {
        lesson,
        id,
        currSelectedIndex,
        value,
        correctAnswerIndex,
      },
    });
  };

export const setTotalNumPages = (payload) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_NUM_PAGES,
    payload,
  });
};
export const setPageNumber = (payload) => (dispatch) => {
  dispatch({
    type: SET_PAGE_NUMBER,
    payload,
  });
};

export const setQuestionIdsByPage = (payload) => (dispatch) => {
  dispatch({
    type: SET_QUESTION_IDS_BY_PAGE,
    payload,
  });
};
