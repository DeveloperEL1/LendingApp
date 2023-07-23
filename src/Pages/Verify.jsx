import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateUserInfo, getAllUsers } from '../api/userApi'
function Verify() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500  file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const [name, setName] = useState('')
    const userInfoStateApiState = useSelector(state => state.userInfoApiReducer)
    console.log(userInfoStateApiState)
    async function verify(e) {
        e.preventDefault()
        const users = await getAllUsers()
        const userName = userInfoStateApiState.name
        const unVerifedUser = users.find(user => user.name === userName)
        if (unVerifedUser.verified === false) {
            return;
        }
        if (userName === name) {
            await updateUserInfo(unVerifedUser._id, { verified: true, moneyCount: userInfoStateApiState.moneyCount + 50 })
            setName('')
            console.log("Verified")
        }

    }
    return (
        <div>
            <h1>Verification mark process</h1>
            {userInfoStateApiState.verified ? "You are already verified" : (
                <div>
                    <input onChange={e => setName(e.target.value)} className={classes.inputStyles} type='email' placeholder='Verify your name' />
                    <button onClick={verify} className={classes.buttonStyles}>Verify your email</button>
                </div>
            )}
        </div>
    )
}

export default Verify
