import React, { useEffect, useState } from 'react'
import './digitalclock.css'

function DigitalClock() {

    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    useEffect(() => {
        setInterval(() => {
            const hh = new Date().getHours()
            const mm = new Date().getMinutes()
            const ss = new Date().getSeconds()

            setHour(hh > 12 ? hh - 12 : hh)
            setMinute(mm)
            setSecond(ss)
        }, 1000)
    }, [])

    return (
        <>
            <div className='digitalclock'>
                <h1>{hour}</h1>
                <h1>{minute}</h1>
                <h1>{second}</h1>
            </div>
        </>
    )
}

export default DigitalClock