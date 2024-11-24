import React, { useEffect, useRef, useState } from 'react'

function SnakeLadder() {
    const [snakeLadderArray, setSnakeLadderArray] = useState(Array.from({ length: 100 }))
    const [currentUserPoint, setCurrentUserPoint] = useState(1)
    const [dice, setDice] = useState(0)
    const ref = useRef(0)

    const combination = [
        [86, 30],
        [43, 35],
        [38, 55],
        [13, 61],
    ]

    function handleRollDice() {
        const rollDice = Math.floor(Math.random() * 6) + 1
        ref.current = 0
        setDice(rollDice)
    }

    useEffect(() => {
        let interval
        if (currentUserPoint + dice <= snakeLadderArray.length) {
            interval = setInterval(() => {
                ref.current += 1
                setCurrentUserPoint((prev) => {
                    if (ref.current <= dice) {
                        prev += 1
                    } else {
                        combination.map((combi) => {
                            if (combi[0] == prev) {
                                setCurrentUserPoint(combi[1])
                            }
                        })
                    }
                    return prev
                })
            }, 300)
        }
        return (() => clearInterval(interval))
    }, [dice])

    useEffect(() => {
        let timeout
        if (snakeLadderArray.length === currentUserPoint) {
            alert('Winner')
            timeout = setTimeout(() => {
                setCurrentUserPoint(1)
                setDice(0)
            }, 500)
        }

        return (() => clearTimeout(timeout))
    }, [currentUserPoint])


    return (
        <div className='flex items-start justify-start gap-4'>
            <div className='mt-5 flex flex-col justify-start'>
                <div className='pb-3'><b>Dice Number</b> : {dice}</div>
                <button onClick={handleRollDice}>Roll Dice</button>
            </div>
            <div className='grid grid-cols-10'>
                {
                    snakeLadderArray.map((item, idx) => {
                        return (
                            <div className='w-[70px] h-[70px] bg-slate-600 border flex justify-center items-center relative'>
                                {snakeLadderArray.length - idx}
                                {currentUserPoint == snakeLadderArray.length - idx && <div className='w-5 h-5 rounded-full bg-white absolute top-[50%] left-[50%] -translate-y-[50%] translate-x-3'></div>}
                            </div>
                        )
                    })
                }
                <div className='absolute top-40 translate-x-[135px] rotate-45'>
                    <img src='/public/snake1.png' className='w-28 h-7w-28 object-contain' alt="" />
                </div>
                <div className='absolute top-72 translate-x-[400px]'>
                    <img src='/public/snake2.png' className='w-28 h-7w-28 object-contain' alt="" />
                </div>
                <div className='absolute top-[265px] translate-x-[250px] rotate-45'>
                    <img src='/public/ladder.png' className='w-28 h-7w-28 object-contain' alt="" />
                </div>
                <div className='absolute top-[195px] translate-x-[520px] rotate-12'>
                    <img src='/public/ladder.png' className='w-40 h-7w-40 object-contain' alt="" />
                </div>
            </div>
        </div>
    )
}

export default SnakeLadder