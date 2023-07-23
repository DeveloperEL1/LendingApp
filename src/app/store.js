import { configureStore } from '@reduxjs/toolkit'
import { userInfoSlice } from './features/userInfoSlice.js'
import { userInfoSliceApi } from './features/userInfoApiSlice.js'
export const store = configureStore({
    reducer: {
        userReducer: userInfoSlice.reducer,
        userInfoApiReducer: userInfoSliceApi.reducer
    }
})