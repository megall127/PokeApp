/* eslint-disable */
import { createStore } from "redux";
import reducer from "./ducks/home";
import rootReducer from "./rootReducers";

const store = createStore(rootReducer);

export default store;