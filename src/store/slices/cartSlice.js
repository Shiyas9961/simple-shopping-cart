import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name : 'cart-item',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeFromCart : (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions

export default cartSlice.reducer