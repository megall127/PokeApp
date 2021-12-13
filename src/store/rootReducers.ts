/* eslint-disable */
import { combineReducers } from "redux";
import home from './ducks/home'
import reducer from "./ducks/home";

const rootReducer = combineReducers({
reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
