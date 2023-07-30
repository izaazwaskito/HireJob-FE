import experienceReducer from "./experienceReducer";
import { combineReducers } from "redux";
import portofolioReducer from "./portofolioReducer";
import SKILLReducer from "./skillReducer";

const rootReducer = combineReducers({
  experience: experienceReducer,
  portofolio: portofolioReducer,
  skill: SKILLReducer,
});

export default rootReducer;
