import { createSlice } from "@reduxjs/toolkit";
const cart = [];

const cartSlice = createSlice({
    name:"cart",
    initialState: {value: cart},
    reducers: {
        addCart: (state, action) => {
            const newItem = action.payload;
            const existItem = state.value.find(item => item.id === newItem.id);
            if (existItem) {
                existItem.qty++
            }
            else{
                state.value = [...state.value, {...newItem, qty: 1}]
            }
        }
    }
})

export const handleCart = cartSlice.actions;
export default cartSlice;