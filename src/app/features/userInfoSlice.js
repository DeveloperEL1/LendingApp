import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: '',
    moneyCount: 0
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        setName: (state, action) => {
            return { ...state, name: action.payload }
        },
        setEmail: (state, action) => {
            return { ...state, email: action.payload }
        },
        setPassword: (state, action) => {
            return { ...state, password: action.payload }
        }
    }
})

export const { setName, setEmail, setPassword } = userInfoSlice.actions
