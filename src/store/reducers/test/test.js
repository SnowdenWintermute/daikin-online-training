import { SET_ANSWER_TO_TEST_QUESTION, CLEAR_TEST_PROGRESS } from "../../actions/types";
import setTestCompletion from "./setTestCompletion";
import stateWithNewAnswer from "../common/stateWithNewAnswer.js";

const initialState = JSON.parse(localStorage.getItem("test")) || {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER_TO_TEST_QUESTION:
      let newState = stateWithNewAnswer(state, payload);
      setTestCompletion(newState, payload);
      console.log(payload)
      console.log(newState)
      localStorage.setItem("test", JSON.stringify(newState));
      return { ...newState };
    case CLEAR_TEST_PROGRESS:
      const storedState = JSON.parse(localStorage.getItem("test"));
      delete storedState[payload];
      localStorage.setItem("test", JSON.stringify(storedState));
      return { ...storedState };
    default:
      return state;
  }
}
