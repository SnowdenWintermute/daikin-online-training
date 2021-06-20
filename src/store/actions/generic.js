import { CLEAR_PROGRESS } from "./types";

export const clearProgress = (payload) => (dispatch) => {
  dispatch({
    type: CLEAR_PROGRESS,
    payload,
  });
};
