/* eslint-disable */
import { createStore } from "redux";
import reducer from "./ducks/home";

const store = createStore(reducer);

export default store;