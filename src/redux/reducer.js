import { combineReducers } from "redux";
import cartSlice from "./handleCart";


const rootReducer = combineReducers({
    cart: cartSlice.reducer
});

export default rootReducer;