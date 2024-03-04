import { combineReducers } from "redux";
import eventslice from "./slices/eventslice";
import wishlistSlice from "./slices/whishlistSlice";
const rootReducer = combineReducers({
  events: eventslice,
  wishlist: wishlistSlice,
});
export default rootReducer;
