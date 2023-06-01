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
                existItem.totalPrice += existItem.price
            }else{
                state.value = [...state.value, {...newItem, qty: 1, totalPrice: newItem.price}]
            }
        },
        removeCart: (state, action) => {
            const id = action.payload;
            const existItem = state.value.find(item => item.id === id);
            if (existItem.qty === 1) {
                state.value = state.value.filter(item => item.id !== id);
            } else{
                existItem.qty--
                existItem.totalPrice -= existItem.price
            }
        },
        removeOneTime: (state, action) => {
            const id = action.payload;
            const existItem = state.value.find(item => item.id === id);
            if (existItem) {
                state.value = state.value.filter(item => item.id !== id);
            }
        },
        clearItem: (state, action) => {
            state.value = [];
        }
    }
})

export const handleCart = cartSlice.actions;
export default cartSlice;