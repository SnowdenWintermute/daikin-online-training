import {
  SET_ANSWER_TO_TEST_QUESTION,
  CLEAR_TEST_PROGRESS,
  SET_TOTAL_NUM_QUESTIONS,
  SET_REVIEWING_TEST_ANSWERS,
} from "../../actions/types";
import setTestCompletion from "./setTestCompletion";
import stateWithNewAnswer from "../common/stateWithNewAnswer.js";
import setNumQuestionsCorrect from "./setNumQuestionsCorrect";

const initialState = JSON.parse(localStorage.getItem("test")) || {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER_TO_TEST_QUESTION:
      let newState;
      newState = stateWithNewAnswer(state, payload);
      setTestCompletion(newState, payload);
      setNumQuestionsCorrect(newState, payload);
      localStorage.setItem("test", JSON.stringify(newState));
      return { ...newState };
    case SET_TOTAL_NUM_QUESTIONS:
      if (!payload.testContent) return state;
      return {
        ...state,
        [payload.lesson]: {
          ...state[payload.lesson],
          totalNumQuestions: payload.testContent.reduce((acc, i) => acc + 1, 0),
        },
      };
    case SET_REVIEWING_TEST_ANSWERS:
      let newStateReviewingAnswers;
      newStateReviewingAnswers = {
        ...state,
        [payload.lesson]: {
          ...state[payload.lesson],
          reviewingTestAnswers: payload.reviewingTestAnswers,
        },
      };
      localStorage.setItem("test", JSON.stringify(newStateReviewingAnswers));
      return { ...newStateReviewingAnswers };
    case CLEAR_TEST_PROGRESS:
      const storedState = JSON.parse(localStorage.getItem("test"));
      if (storedState[payload]) delete storedState[payload];
      console.log(storedState);
      localStorage.setItem("test", JSON.stringify(storedState));
      return { ...storedState };
    default:
      return state;
  }
}
