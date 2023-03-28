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
            return {
                name: data[0].name,
                email: data[0].email,
            }
        } else {
            return rejectWithValue("email or password do not match")
        }

    } catch (error) {
        return rejectWithValue("something went wrong : " + error.message)

    }

})