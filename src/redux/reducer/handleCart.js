import { createSlice } from "@reduxjs/toolkit";
const cart = [];

const cartSlice = createSlice({
    name:"cart",
    initialState: { value: cart },
    reducers: {
        Add_To_Cart: (state, action) => {
            
        }
    }
})


export default handleCart;