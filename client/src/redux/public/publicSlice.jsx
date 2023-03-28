import { createSlice } from "@reduxjs/toolkit";
import { getCartItems, getProductDetail, getProducts, userRegister } from "./publicAction";

const publicSlice = createSlice({
    name: "public",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart.push(payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state, { payload }) => {
                state.laoding = true
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.laoding = false
                state.products = payload
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.laoding = false
                state.error = payload
            })

            .addCase(getProductDetail.pending, (state, { payload }) => {
                state.laoding = true
            })
            .addCase(getProductDetail.fulfilled, (state, { payload }) => {
                state.laoding = false
                state.singleProduct = payload
            })
            .addCase(getProductDetail.rejected, (state, { payload }) => {
                state.laoding = false
                state.error = payload
            })





            .addCase(getCartItems.pending, (state, { payload }) => {
                state.laoding = true
            })
            .addCase(getCartItems.fulfilled, (state, { payload }) => {
                state.laoding = false
                state.cart = payload
            })
            .addCase(getCartItems.rejected, (state, { payload }) => {
                state.laoding = false
                state.error = payload
            })


            .addCase(userRegister.pending, (state, { payload }) => {
                state.laoding = true
            })
            .addCase(userRegister.fulfilled, (state, { payload }) => {
                state.laoding = false
                state.register = true
            })
            .addCase(userRegister.rejected, (state, { payload }) => {
                state.laoding = false
                state.error = payload
            })
    }

})

export const { addToCart } = publicSlice.actions

export default publicSlice.reducer