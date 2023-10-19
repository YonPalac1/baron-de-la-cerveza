import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducerData }from "./reducers.js";

const rootReducer = combineReducers({
  data: reducerData,
});

export default function generateStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  return store;
}