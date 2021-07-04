import {
  CLEAR_TEST_PROGRESS,
  SET_ANSWER_TO_TEST_QUESTION,
  SET_TOTAL_NUM_QUESTIONS,
  SET_REVIEWING_TEST_ANSWERS,
} from "./types";

export const setAnswerToTestQuestion =
  ({ lesson, id, currSelectedIndex, value, correctAnswerIndex }) =>
  (dispatch) => {
    dispatch({
      type: SET_ANSWER_TO_TEST_QUESTION,
      payload: { lesson, id, currSelectedIndex, value, correctAnswerIndex },
    });
  };

export const setTotalNumQuestions =
  ({ lesson, testContent }) =>
  (dispatch) => {
    dispatch({ type: SET_TOTAL_NUM_QUESTIONS, payload: { lesson, testContent } });
  };

export const clearTestProgress = (lesson) => (dispatch) => {
  dispatch({ type: CLEAR_TEST_PROGRESS, payload: lesson });
};

export const setReviewingTestAnswers = (payload) => (dispatch) => {
  dispatch({ type: SET_REVIEWING_TEST_ANSWERS, payload });
};
