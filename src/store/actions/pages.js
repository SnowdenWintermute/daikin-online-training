import { SET_PAGE_NUMBER } from "./types";
import { SET_TOTAL_NUM_PAGES } from "./types";

export const setTotalNumPages = (num) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_NUM_PAGES,
    payload: num,
  });
};
export const setPageNumber = (num) => (dispatch) => {
  dispatch({
    type: SET_PAGE_NUMBER,
    payload: num,
  });
};
