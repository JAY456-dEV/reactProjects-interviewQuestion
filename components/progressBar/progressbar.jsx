import React, { useEffect, useState } from 'react'
import './progress.css'

function ProgressBar() {

    const [round, setRound] = useState(Array(4).fill(null))
    const [progressCount, setProgressCount] = useState(0)
    const [progresswidth, setProgressWidth] = useState(0)

    function handleNext() {
        if (progressCount < round.length) {
            setProgressCount(prev => prev + 1)
        }
    }

    useEffect(() => {
        const copyRound = [...round]
        if (progressCount !== 0) {
            copyRound[progressCount - 1] = progressCount - 1
            setRound(copyRound)
        }

        if (progressCount < round.length) {
            const progressPercentage = (progressCount / (round.length - 1)) * 100
            setProgressWidth(progressPercentage)
        }
    }, [progressCount])

    console.log(round)

    return (
        <>
            <div className='progresss'>
                <div className='prog-main'>
                    <div className='progressBar'>
                        <div className='progressed-bar-end' style={{ width: `${progresswidth}%` }}></div>
                    </div>
                    {
                        round.map((count, idx) => {
                            return (
                                <div key={idx} className={`round-info ${progressCount === idx ? 'addBlue' : ''}`}>{round.indexOf(idx) !== -1 ? <div className='completed'><span> <i class="fa-solid fa-check"></i> </span></div> : idx + 1}</div>

                                //or

                                // <div key={idx} className={`round-info ${progressCount === idx ? 'addBlue' : ''}`}>{progressCount > idx ? <div className='completed'><span> <i class="fa-solid fa-check"></i> </span></div> : idx + 1}</div>
                            )
                        })
                    }
                </div>
                <div className='prog-info'>
                    <p>Custmor Info</p>
                    <p>Shipping Info</p>
                    <p>Payment</p>
                    <p>Deliverd</p>
                </div>
                <button  onClick={() => handleNext()}>Next</button>
            </div>
        </>
    )
}

export default ProgressBar