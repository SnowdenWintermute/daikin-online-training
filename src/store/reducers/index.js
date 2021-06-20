// root reducer
import { combineReducers } from "redux";
import quiz from "./quiz";
import lessons from "./lessons";

export default combineReducers({
  quiz,
  lessons,
});
