import { SET_PAGE_NUMBER } from "../actions/types";
import { SET_TOTAL_NUM_PAGES } from "../actions/types";

const initialState = {
  totalNumPages: 0,
  pageNumber: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
    case SET_TOTAL_NUM_PAGES:
      return { ...state, totalNumPages: payload };
    default:
      return state;
  }
}
