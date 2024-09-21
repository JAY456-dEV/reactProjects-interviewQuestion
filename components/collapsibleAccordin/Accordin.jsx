import React, { useEffect, useState } from 'react'
import './accordin.css'

function Accordin() {

    const [ansOpenIdx, setAnsOpenIdx] = useState(0)
    const [progressCounter, setProgressCounter] = useState(0)

    const data = [
        {
            ques: 'what is devtools.tech?',
            ans: 'Yes,the platform and youtube both are completly free!'
        },

        {
            ques: 'take me there already',
            ans: 'hey i just wanted to say'
        },

        {
            ques: 'is it free',
            ans: 'yeah sure'
        }
    ]


    function handleIdx(idx) {
        setProgressCounter(0)
        setAnsOpenIdx(idx)
    }

    function handleAnother() {
        if (data.length - 1 > ansOpenIdx) {
            setAnsOpenIdx(prev => prev + 1)
            setProgressCounter(0)
        } else {
            setAnsOpenIdx(0)
            setProgressCounter(0)
        }
    }

    useEffect(() => {
        let timer;
        clearInterval(timer)
        timer = setInterval(() => {
            if (progressCounter < 100) {
                setProgressCounter(prev => prev + 1)
            } else {
                handleAnother()
            }
        }, 20)

        return (() => clearInterval(timer))
    }, [handleIdx, ansOpenIdx])


    return (
        <div className='accordin-main '>
            <div className='accordin-flex'>
                {
                    data.map((item, idx) => {
                        return (
                            <div className='ques-main-start ' key={idx}>
                                <div className='progressbar'>
                                    <div className={`${ansOpenIdx === idx ? 'mainprogress' : null}`} style={{ width: `${progressCounter}%` }}></div>
                                </div>
                                <div>
                                    <div className='ques-main' onClick={() => handleIdx(idx)}>
                                        <h4>{item.ques}</h4>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className={`ans ${ansOpenIdx === idx ? 'activeAns' : null}`}>
                                        <p>{item.ans}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordin