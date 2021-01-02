import { combineReducers } from "redux";
import orangesReducer from "./oranges";
import applesReducer from "./apples";

const appReducer = combineReducers({
  apples: applesReducer,
  oranges: orangesReducer,
});

export default appReducer;
