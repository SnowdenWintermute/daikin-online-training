import { SET_ANSWER_TO_QUESTION } from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ANSWER_TO_QUESTION:
      return { ...state, [payload.id]: { value: payload.value, index: payload.currSelectedIndex } };
    default:
      return state;
  }
}
