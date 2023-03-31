import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const login = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await api.get("/users", {
            params: {
                email: userData.email,
                password: userData.password
            }
        })
        console.log(data)
        if (data.length !== 0) {
            localStorage.setItem("userInfo", JSON.stringify(data[0]))
            return data[0]


        } else {
            return rejectWithValue("email or password do not match")
        }

    } catch (error) {
        return rejectWithValue("something went wrong : " + error.message)

    }

})
export const updateProfile = createAsyncThunk("user/update-profile", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await api.put(`/users/${userData.id}`, userData)
        return true
    } catch (error) {
        return rejectWithValue("something went wrong : " + error.message)

    }

})
export const placeOrder = createAsyncThunk("user/order-place", async (orderData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post(`/orders`, {
            userId: getState().user.info.id,
            products: orderData,
            paid: false,
            status: "placed"
        })
        return true
    } catch (error) {
        return rejectWithValue("something went wrong : " + error.message)

    }

})
export const getUserOrders = createAsyncThunk("user/get-orders", async (orderData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get(`/orders`, {
            params: {
                userId: getState().user.info.id
            }
        })
        return data
    } catch (error) {
        return rejectWithValue("something went wrong : " + error.message)

    }

})