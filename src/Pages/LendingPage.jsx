import React, { useReducer } from 'react'
import { getAllUsers, updateUserInfo } from '../api/userApi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function LendingPage() {

    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500  file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }

    const userInfoStateApiState = useSelector(state => state.userInfoApiReducer)

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_ADDRESS':
                return { ...state, address: action.payload }
            case 'SET_AMOUNT':
                return { ...state, amount: action.payload }
            case "SET_FROM":
                return { ...state, from: action.payload }
        }
    }
    const [state, dispatch] = useReducer(reducer, { address: '', amount: 0, from: '' })

    async function lendMoneyTo(e, from, address, amount) {
        e.preventDefault()
        const response = await getAllUsers()
        const borrower = response?.find(user => user.email === address)
        const lender = response?.find(user => user.email === from)
        if (borrower && lender) {
            lender.moneyCount -= parseInt(amount)
            borrower.moneyCount += parseInt(amount)
        }
        await updateUserInfo(lender?._id, { moneyCount: lender.moneyCount })
        console.log("Done1")
        await updateUserInfo(borrower?._id, { moneyCount: borrower.moneyCount })
        console.log("Done2")
    }
    return (
        <div className='flex justify-center items-center flex-col gap-10 bg-indigo-300 h-screen flex-grow'>
            <h2>Lend</h2>
            <p>Your current balance is: {userInfoStateApiState ? userInfoStateApiState.moneyCount : null}</p>
            {userInfoStateApiState.moneyCount !== 0 ?
                <div className={`flex flex-col gap-10 border-none	 ${classes.inputStyles}`}>
                    <input onChange={e => dispatch({ type: "SET_FROM", payload: e.target.value })} placeholder="From..." />
                    <input onChange={e => dispatch({ type: "SET_ADDRESS", payload: e.target.value })} placeholder='Lend to address...' type='text' />
                    <input onChange={e => dispatch({ type: 'SET_AMOUNT', payload: e.target.value })} placeholder='How much...' type='number' />
                    <button onClick={e => lendMoneyTo(e, state.from, state.address, state.amount)} className={classes.buttonStyles}>Lend</button>
                </div>
                : <p>You have no more reserves. Sell some of your assets and get more. Good luck!</p>
            }
            <div className='flex items-end flex-grow mb-2'>
                <Link className={classes.buttonStyles} to="/">Go back</Link>
            </div>
        </div>

    )
}

export default LendingPage
