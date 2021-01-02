import { createStore, applyMiddleware } from "redux";
import appReducer from "./redux/index";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;
