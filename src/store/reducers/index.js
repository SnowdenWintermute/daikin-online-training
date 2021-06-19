// root reducer
import { combineReducers } from "redux";
import quiz from "./quiz";
import pages from "./pages";

export default combineReducers({
  quiz,
  pages,
});
