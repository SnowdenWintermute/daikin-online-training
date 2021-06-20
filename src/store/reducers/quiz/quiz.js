import {
  SET_ANSWER_TO_QUESTION,
  CLEAR_PROGRESS,
  SET_QUESTION_IDS_BY_PAGE,
} from "../../actions/types";
import { SET_PAGE_NUMBER } from "../../actions/types";
import { SET_TOTAL_NUM_PAGES } from "../../actions/types";
import checkAnswer from "./checkAnswer";
import setNumQuestionsCorrect from "./setNumQuestionsCorrect";
import setPageCompletion from "./setPageCompletion";
import setQuizCompletion from "./setQuizCompletion";

import stateWithNewAnswer from "./stateWithNewAnswer.js";

const initialState = JSON.parse(localStorage.getItem("quiz")) || {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER_TO_QUESTION:
      let newState = stateWithNewAnswer(state, payload);
      checkAnswer(newState, payload);
      setPageCompletion(newState, payload);
      setQuizCompletion(newState, payload);
      setNumQuestionsCorrect(newState, payload);
      localStorage.setItem("quiz", JSON.stringify(newState));
      return { ...newState };
    case CLEAR_PROGRESS:
      const storedState = JSON.parse(localStorage.getItem("quiz"));
      delete storedState[payload];
      localStorage.setItem("quiz", JSON.stringify(storedState));
      return { ...storedState };
    case SET_PAGE_NUMBER:
      localStorage.setItem(
        "quiz",
        JSON.stringify({
          ...state,
          [payload.lesson]: { ...state[payload.lesson], pageNumber: payload.currPageNum },
        })
      );
      return {
        ...state,
        [payload.lesson]: { ...state[payload.lesson], pageNumber: payload.currPageNum },
      };
    case SET_TOTAL_NUM_PAGES:
      return {
        ...state,
        [payload.lesson]: { ...state[payload.lesson], numTotalPages: payload.numTotalPages },
      };
    case SET_QUESTION_IDS_BY_PAGE:
      return {
        ...state,
        [payload.lesson]: {
          ...state[payload.lesson],
          questionIdsByPage: payload.questionIdsByPage,
        },
      };
    default:
      return state;
  }
}
