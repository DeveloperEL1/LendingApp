import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function TopBar() {
    const classes = {
        buttonStyles: "bg-teal-700 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const userInfoApiState = useSelector(state => state.userInfoApiReducer)
    return (
        <div className="relative bg-teal-500 p-3 shadow-lg">
            <div className='absolute top-5'>
                {userInfoApiState.moneyCount ?
                    <div className='space-x-3'>
                        <Link className={classes.buttonStyles} to='/lend'>Lend</Link>
                        <Link className={classes.buttonStyles} to='/dashboard'>Dashboard</Link>
                    </div>
                    : null
                }


            </div>
            <div className=' flex justify-end flex-grow gap-3'>
                <Link className={classes.buttonStyles} to="/signin">Sign In</Link>
                {!userInfoApiState.name ?
                    <Link className={classes.buttonStyles} to='/signup'>Sign Up </Link>
                    : null}
                {userInfoApiState.moneyCount ?
                    <Link className={classes.buttonStyles} to='/verify'>Verify</Link>
                    : null
                }
                <Link className={classes.buttonStyles} to='/reviews'>Reviews</Link>
            </div>
        </div>
    )
}

export default TopBar
