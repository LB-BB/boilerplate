import { createStore, applyMiddleware } from "redux";
import dummyReducer from "./index";
import prisonsReducer from "./prisons";
import prisonersReducer from "./prisoners";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  dummyReducer,
  prisonsReducer,
  prisonersReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
