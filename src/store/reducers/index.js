// root reducer
import { combineReducers } from "redux";
import quiz from "./quiz/quiz";
import test from "./test/test";
import lessons from "./lessons";

export default combineReducers({
  quiz,
  test,
  lessons,
});
