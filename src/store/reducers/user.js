import { SET_FULL_NAME } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  firstName: null,
  middleName: null,
  lastName: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FULL_NAME:
      const newState = {
        ...state,
        firstName: payload.firstName,
        middleName: payload.middleName,
        lastName: payload.lastName,
      };
      localStorage.setItem("user", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}
