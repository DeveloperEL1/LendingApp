import React, { useState } from 'react'
import { signInUserInfo } from '../api/userApi'
import { setUserInfo, removeUserInfo } from '../app/features/userInfoApiSlice'
import { useDispatch, useSelector } from 'react-redux'

function SignIn() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500 file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const userInfoApiState = useSelector(state => state.userInfoApiReducer)
    async function signInHandlerAsync() {
        dispatch(setUserInfo(await signInUserInfo(email, password)))
    }

    function logOutHandler(e) {
        e.preventDefault()
        dispatch(removeUserInfo())
    }
    return (
        <div className='flex justify-center items-center flex-col gap-5 h-screen bg-3455 bg-gray-200'>
            <h1 className='decoration-slate-50	font-bold'>Sign in</h1>
            <input onChange={e => setEmail(e.target.value)} className={classes.inputStyles} placeholder='Email...' type='email' />
            <input onChange={e => setPassword(e.target.value)} className={classes.inputStyles} placeholder='Password...' type='password' />
            <button onClick={signInHandlerAsync} className={classes.buttonStyles}>Sign In</button>
            {userInfoApiState.name ? (
                <div className='flex justify-center items-center flex-col'>
                    <button onClick={logOutHandler} className={classes.buttonStyles}>Log Out</button>
                    <div>You are sign in as {userInfoApiState.name}</div>
                </div>
            ) : null}
        </div>

    )
}

export default SignIn