import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
// import cartSlice from "./handleCart";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";




// const store = configureStore({
//     reducer: {
//       cart: cartSlice.reducer
//     }
//   });

//   export default store;


const persistConfig = {
  key: 'root',
  storage
};




const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})
export const persistor = persistStore(store);