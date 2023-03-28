import { createSlice } from "@reduxjs/toolkit";
import { getProductDetail, getProducts } from "./publicAction";

const publicSlice = createSlice({
    name: "public",
    initialState: {},
    reducers: {},
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
    }

})


export default publicSlice.reducer