import React, { useEffect, useRef, useState } from 'react'
import './progress.css'

function Progress() {

    const [counter, setCounter] = useState(1)
    const [progressBar, setProgressBar] = useState(Array.from({ length: 1 }))
    const [progressCount, setProgressCount] = useState(0)

    const ref = useRef([])

    function handleClick() {
        setCounter(prev => prev + 1)
    }

    useEffect(() => {
        let timerId
        setProgressBar(Array.from({ length: counter }))
        // timerId = setInterval(() => {
        //     if (progressCount < 100) {
        //         setProgressCount(prev => prev + 1)
        //     } else {
        //         clearInterval(timerId)
        //     }
        // }, 50)

        // return (() => clearInterval(timerId))
    }, [counter])

    console.log(ref.current[0])


    return (
        <>
            <button onClick={handleClick} className='ADDbtn'>+ Add</button>
            {
                progressBar.map((_, idx) => {
                    return (
                        <div className="progress-bars" key={idx}>
                            <div className='progress' style={{ width: `${progressCount}%` }} ></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Progress