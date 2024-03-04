import { combineReducers } from "redux";
import eventslice from "./slices/eventslice";

const rootReducer = combineReducers({
  events: eventslice,
});
export default rootReducer;
