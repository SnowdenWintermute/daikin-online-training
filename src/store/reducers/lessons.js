import { SET_CURRENT_LESSON } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("lessons")) || {
  currentLesson: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_LESSON:
      return { ...state, currentLesson: payload };
    default:
      return state;
  }
}
