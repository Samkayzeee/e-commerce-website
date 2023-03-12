import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./handleCart";
import { createStore } from "@reduxjs/toolkit";

// const store = configureStore({rootReducer})
const store = createStore(rootReducer);


export default store;

