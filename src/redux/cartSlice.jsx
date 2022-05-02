import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    shipping: 12.90,
    discount: 5.70
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        removeAll: () => initialState
    }
})

export const { addProduct, removeAll } = cartSlice.actions
export default cartSlice.reducer
