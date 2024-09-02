import React, { useEffect, useState } from 'react'
import './progress.css'

function Practice() {

    const [counter, setCounter] = useState(100)

    useEffect(() => {
        let timer
        timer = setInterval(() => {
            setCounter((prev) => prev > 0 ? prev - 1 : clearInterval(timer))
        }, 1000)
        console.log(timer)
        return (() => clearInterval(timer))
    }, [counter])

    return (
        <>
            <p>{counter}</p>
            <div className='progress-main'>
                <div className='progress-practice' style={{ width: `${100 - counter}%` }}></div>
            </div>
        </>
    )
}

export default Practice