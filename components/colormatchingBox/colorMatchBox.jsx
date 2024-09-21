import React, { useEffect, useState } from 'react'
import '../colormatchingBox/colormatch.css'

function ColorMatchBox({ boxSize }) {
    function handleColor() {
        const arr = []
        const hex = 'ABCDEF0123456789'
        for (let i = 0; i < boxSize / 2; i++) {
            let colorGen = '#'
            for (let i = 0; i < 6; i++) {
                colorGen += hex[Math.floor(Math.random() * hex.length)]
            }
            arr.push(colorGen)
            arr.push(colorGen)
        }
        return arr
    }

    const [boxes, setBoxes] = useState(handleColor().sort(() => Math.random() - 0.5))
    const [clickedBox, setClickedBox] = useState([])
    const [justshow, setJustShow] = useState([])

    const [winnig, setWinnig] = useState(false)

    function handleClickedBox(color, idx) {
        if (justshow.length < 2) {
            setClickedBox(prev => [idx, ...prev])
            setJustShow(prev => [...prev, idx])
        }
    }

    const [btnOf, setBtnOf] = useState(false)
    useEffect(() => {
        let intervalID
        if (justshow.length == 2) {
            setBtnOf(true)
            if (boxes[clickedBox[0]] == boxes[clickedBox[1]]) {
                clearInterval(intervalID)
                setJustShow([])
                setBtnOf(false)
            } else {
                setTimeout(() => {
                    setClickedBox(prev => prev.splice(2))
                    setJustShow([])
                    setBtnOf(false)
                }, 400)
            }
        }
        return (() => clearInterval(intervalID))
    }, [clickedBox])

    useEffect(() => {
        if (clickedBox.length == boxes.length) {
            setWinnig(true)
        }
    }, [clickedBox])

    return (
        <>
            <div className='box-container'>
                {
                    !winnig ? boxes.map((item, idx) => {
                        return (
                            <button className='boxes-Color' disabled={btnOf} onClick={() => handleClickedBox(item, idx)} key={idx} style={{
                                backgroundColor: `${clickedBox.find(itemIdx => itemIdx == idx) ? `${item}` : ''}`, border: '1px solid white'
                            }}></button>
                        )
                    }) : <h1>You Win</h1>
                }
            </div>
        </>
    )
}

export default ColorMatchBox