import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: '',
    moneyCount: 0,
    verifed: false
}

export const userInfoSliceApi = createSlice({
    name: 'userInfoApi',
    initialState: initialState,
    reducers: {
        setUserInfo(state, action) {
            return state = action.payload
        },
        removeUserInfo(state, action) {
            return {}
        }
    }
})

export const { setUserInfo, removeUserInfo } = userInfoSliceApi.actions
