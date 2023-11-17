import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import cartSlice from "./handleCart";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";





// const store = configureStore({
//     reducer: {
//       cart: cartSlice.reducer
//     }
//   });

//   export default store;


const rootReducer = combineReducers({
  cart: cartSlice.reducer
});


const persistConfig = {
  key: 'root',
  storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);