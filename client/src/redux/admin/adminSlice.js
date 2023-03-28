import { createSlice } from "@reduxjs/toolkit";
import { addProduct, readProducts, updateProduct } from "./adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: state => {
            state.productAdded = null
            state.error = null
            state.update = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productAdded = true
            })
            .addCase(addProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(readProducts.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(readProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(readProducts.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(updateProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.update = true
            })
            .addCase(updateProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }

})

export const { invalidate } = adminSlice.actions

export default adminSlice.reducer