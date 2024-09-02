import React, { useEffect, useState } from 'react'
import './selectGrid.css'

function SelectGrid() {

    const [twoDMatrix, setTwoDMatrix] = useState([])
    const [start, setStart] = useState([])
    const [end, setEnd] = useState([])


    function prepareTwoDMatrix() {
        const newArr = []
        for (let i = 0; i <= 9; i++) { //row
            for (let j = 0; j <= 9; j++) { // columns
                const obj = {
                    pos: [i, j],
                    isColor: false
                }
                newArr.push(obj)
            }
        }
        setTwoDMatrix(newArr)
    }

    useEffect(() => {
        prepareTwoDMatrix()
    }, [])

    function handleDrag(e, pos) {
        setStart(pos)
        prepareTwoDMatrix()
    }

    function handleDragOver(e, pos) {
        setEnd(pos)
    }

    function fillColor(startPos, endPos) {
        const [startRow, startCol] = startPos
        const [endRow, endCol] = endPos

        const selectedGridCombo = []
        for (let i = startRow; i <= endRow; i++) { //row travers
            for (let j = startCol; j <= endCol; j++) { //col travers
                selectedGridCombo.push([i, j].join(''))
            }
        }

        let copyMat = [...twoDMatrix]
        copyMat = copyMat.map((item) => {
            const { pos } = item
            const stringPos = pos.join('')
            if (selectedGridCombo.includes(stringPos)) {
                item.isColor = true
            }
            return item
        })
        setTwoDMatrix(copyMat)
    }

    useEffect(() => {
        if (start.length > 1 && end.length > 1) {
            fillColor(start, end)
        }
    }, [start, end])

    return (
        <>
            <div className='App'>
                <h1>Selectable Grid</h1>
                <div className='grid'>
                    <div className='board'>
                        {
                            twoDMatrix?.map((item, idx) => {
                                return (
                                    <div key={idx} className={`cell ${item.isColor ? 'selectedCell-color' : ''}`}
                                        onDrag={(e) => handleDrag(e, item.pos)}
                                        onDragOver={(e) => handleDragOver(e, item.pos)}
                                        draggable
                                    >
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectGrid