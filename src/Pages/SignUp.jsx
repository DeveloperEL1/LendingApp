import React, { useReducer } from 'react'
import { signUpUserInfo } from '../api/userApi'
import { useDispatch } from 'react-redux'
import { setName, setEmail, setPassword } from '../app/features/userInfoSlice'
import { useSelector } from 'react-redux'

function SignUp() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500 file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.userReducer)
    console.log(userInfo)
    const asyncSignUpHandler = async (e) => {
        e.preventDefault()
        await signUpUserInfo(userInfo.name, userInfo.email, userInfo.password)
        console.log("Success")
    }
    return (
        <div className='flex justify-center items-center flex-col gap-5 h-screen bg-3455 bg-gray-200'>
            <h1 className='decoration-slate-50	font-bold'>Sign Up</h1>
            <input onChange={e => dispatch(setName(e.target.value))} className={classes.inputStyles} placeholder='Name...' type='text' />
            <input onChange={e => dispatch(setEmail(e.target.value))} className={classes.inputStyles} placeholder='Create your email...' type='email' />
            <input onChange={e => dispatch(setPassword(e.target.value))} className={classes.inputStyles} placeholder='Create your password...' type='password' />
            <button onClick={asyncSignUpHandler} className={classes.buttonStyles}>Sign Up</button>
        </div>

    )
}

export default SignUp
