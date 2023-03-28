import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getProducts = createAsyncThunk("public/get-products", async (value, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/products", {
            params: {
                publish: true
            }
        })
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

})
export const getProductDetail = createAsyncThunk("public/get-product-detail", async (product, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`/products/${product}`, {
            params: {
                publish: true
            }
        })
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

})


export const getCartItems = createAsyncThunk("public/get-cart", async (cartItem, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`/cart`)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

})
export const userRegister = createAsyncThunk("public/register", async (user, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/users`, user)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }

})