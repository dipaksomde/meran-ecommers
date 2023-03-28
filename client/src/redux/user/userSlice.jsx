import { createSlice } from "@reduxjs/toolkit";
import { login } from "./userActions";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false
                state.info = payload
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

    }

})

export default userSlice.reducer