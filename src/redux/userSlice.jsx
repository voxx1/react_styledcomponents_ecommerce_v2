import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

const cartSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => { },
        loginSuccess: (state, action) => {

        },
        loginFailure: (state) => { }
    }
})

export const { addProduct, addCartItem } = cartSlice.actions
export default cartSlice.reducer