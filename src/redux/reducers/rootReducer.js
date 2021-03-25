import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer from "./gamesReducer";

// root reducer combines all reducers so you can add them in the store
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
