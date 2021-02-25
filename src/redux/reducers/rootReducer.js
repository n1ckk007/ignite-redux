import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

// root reducer combines all reducers so you can add them in the store
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
