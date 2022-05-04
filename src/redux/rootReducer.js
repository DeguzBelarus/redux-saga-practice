import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  //== набор редьюсеров
  posts: postsReducer,
  app: appReducer,
  //== набор редьюсеров
});
