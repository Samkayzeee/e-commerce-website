import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./handleCart";


const store = configureStore({
    reducer: {
      cart: cartSlice.reducer
    }
  });

  export default store;