import { SET_FULL_NAME } from "./types";

export const setFullName = (payload) => (dispatch) => {
  dispatch({
    type: SET_FULL_NAME,
    payload,
  });
};
