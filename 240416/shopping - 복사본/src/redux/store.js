import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { composeWith } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
