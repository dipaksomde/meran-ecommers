import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const addProduct = createAsyncThunk("admin/add-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/products", {
            ...productData,
            publish: true,
            available: true
        })
        return true
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)
    }
})

export const readProducts = createAsyncThunk("admin/get-products", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/products")
        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)
    }
})
export const updateProduct = createAsyncThunk("admin/update-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.patch(`/products/${productData.id}`, productData)
        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message)
    }
})