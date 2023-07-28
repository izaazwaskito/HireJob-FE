import experienceReducer from "./experienceReduce";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  experience: experienceReducer,
});

export default rootReducer;
