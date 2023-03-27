import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./admin/adminSlice"
import publicSlice from "./public/publicSlice"
import userSlice from "./user/userSlice"

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        public: publicSlice,
        user: userSlice,
    },

})

export default reduxStore