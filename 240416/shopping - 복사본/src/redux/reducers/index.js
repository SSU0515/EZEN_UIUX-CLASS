import { combineReducers } from "redux";
import authticateReducer from "./authticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authticateReducer,
  product: productReducer,
});

