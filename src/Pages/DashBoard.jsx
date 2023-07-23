import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

function DashBoard() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500 file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const dispatch = useDispatch()
    const userInfoApiData = useSelector(state => state.userInfoApiReducer)
    console.log(userInfoApiData)
    const [isOpen, setIsOpen] = useState(false)


    function setModel() {
        setIsOpen(prev => !prev)
    }
    return (
        <div className="flex justify-center items-center flex-col bg-teal-100 h-screen bg-black-200" >
            <div className={`${isOpen ? 'hidden' : 'flex flex-col justify-between bg-slate-200 p-4 gap-3'} `}>
                <h1>Your name is: {userInfoApiData.name}</h1>
                <h2>Your email is: {userInfoApiData.email}</h2>
                <h2>Your current balance: {userInfoApiData.moneyCount}</h2>
                <h2>Verified: {userInfoApiData?.verified}</h2>
            </div>
            <button className={`${classes.buttonStyles} mt-5`} onClick={setModel}>Open</button>

            <div className='flex mt-5'>
                <Link className={classes.buttonStyles} to="/">Go back</Link>
            </div>
        </div>
    )
}

export default DashBoard
