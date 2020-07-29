import { combineReducers } from "redux";
import { authentication } from "./auth/reducers";
import { questions } from "./questions/reducers";

export const rootReducer = combineReducers({
  authentication,
  questions,
});
