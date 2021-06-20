import { SET_CURRENT_LESSON } from "./types";

export const setCurrentLesson = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LESSON,
    payload,
  });
};
