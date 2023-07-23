import React from 'react'

function Reviews() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500 file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    return (
        <div>
            <h2>Reviews</h2>
            <input className={classes.buttonStyles} type="text" placeholder='Leave your review...' />

            <h2>EVERTHING YOU WRITE HERE IS GREATLY APPRECIATED</h2>
        </div>
    )
}

export default Reviews
