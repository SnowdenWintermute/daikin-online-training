import { SET_ANSWER_TO_QUESTION, CLEAR_PROGRESS, SET_QUESTION_IDS_BY_PAGE } from "../actions/types";
import { SET_PAGE_NUMBER } from "../actions/types";
import { SET_TOTAL_NUM_PAGES } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("quiz")) || {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER_TO_QUESTION:
      let newState = {
        ...state,
        [payload.lesson]: {
          ...state[payload.lesson],
          answers: {
            ...state[payload.lesson].answers,
            [payload.id]: {
              value: payload.value,
              index: payload.currSelectedIndex,
              correctAnswerIndex: payload.correctAnswerIndex,
            },
          },
        },
      };
      if (
        newState[payload.lesson].answers[payload.id].index ===
        newState[payload.lesson].answers[payload.id].correctAnswerIndex
      ) {
        newState[payload.lesson].answers[payload.id].isCorrect = true;
      } else newState[payload.lesson].answers[payload.id].isCorrect = false;

      Object.keys(newState[payload.lesson].questionIdsByPage).forEach((key) => {
        let currPageIsComplete = true;
        newState[payload.lesson].questionIdsByPage[key].forEach((id) => {
          if (
            !newState[payload.lesson].answers[id] ||
            !newState[payload.lesson].answers[id].isCorrect
          )
            currPageIsComplete = false;
        });
        if (!newState[payload.lesson].pagesCompletionStatus)
          newState[payload.lesson].pagesCompletionStatus = {};
        newState[payload.lesson].pagesCompletionStatus[key] = currPageIsComplete;
      });
      localStorage.setItem("quiz", JSON.stringify(newState));
      return newState;
    case CLEAR_PROGRESS:
      const storedState = JSON.parse(localStorage.getItem("quiz"));
      console.log(storedState);
      console.log(payload);
      delete storedState[payload];
      localStorage.setItem("quiz", JSON.stringify(storedState));
      return { ...storedState };
    case SET_PAGE_NUMBER:
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
