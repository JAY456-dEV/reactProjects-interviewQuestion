import React, { useEffect, useState } from 'react'
import { SlDiamond } from "react-icons/sl";
import { GiUnlitBomb } from "react-icons/gi";

function MineGame() {

    const [difficulty, setDifficulty] = useState({ difficulty: 'easy', diamond: 21 })
    const [selectedMine, setSelectedMine] = useState([])
    const [isDiamond, setIsDiamond] = useState(true)
    const [youGussedAllRight, setYouGussedAllRight] = useState(false)
    const [minesArray, setMinesArray] = useState(null)

    function handleGenrateMineGame() {
        let arr = Array.from({ length: 25 }).map((mine, idx) => {
            if (idx < difficulty.diamond) {
                return {
                    id: crypto.randomUUID(),
                    icon: SlDiamond,
                    isBomb: false
                }
            } else {
                return {
                    id: crypto.randomUUID(),
                    icon: GiUnlitBomb,
                    isBomb: true
                }
            }
        })

        setMinesArray(arr.sort(() => Math.random() - 0.5))
    }

    useEffect(() => {
        handleGenrateMineGame()
    }, [difficulty])


    function handleSelectedMine(mine, idx) {
        setSelectedMine(prev => [...prev, { ...mine, idx }])
    }


    useEffect(() => {
        const copyArray = [...selectedMine]
        let show = copyArray.every((item) => {
            if (!item.isBomb) return true
        })

        setIsDiamond(show)

        const allSelectedDiamondLength = copyArray.filter((item) => !item.isBomb).length
        const allDiamondLength = minesArray && minesArray.filter((item) => !item.isBomb).length

        if (allSelectedDiamondLength == allDiamondLength) {
            setYouGussedAllRight(true)
        }
    }, [selectedMine])


    console.log(selectedMine)


    function handleDifficulty(e) {
        const singleOption = e.target.options[e.target.selectedIndex]
        const difficultyAttribute = singleOption.getAttribute('data-difficulty')
        setDifficulty({ difficulty: e.target.value, diamond: parseInt(difficultyAttribute) })
    }

    useEffect(() => {
        let intervalId
        if (!isDiamond) {
            intervalId = setTimeout(() => {
                setSelectedMine([])
            }, 1500)

            setTimeout(() => {
                handleGenrateMineGame()
            }, 1550)
        }
        return (() => clearInterval(intervalId))
    }, [isDiamond])

    function handlePlayAgain() {
        setDifficulty({ difficulty: 'easy', diamond: 25 })
        setYouGussedAllRight(false)
        setSelectedMine([])
        handleGenrateMineGame()
    }

    return (
        <>
            <div className='flex flex-col max-w-[600px] mx-auto h-[120vh]'>
                {
                    youGussedAllRight && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                <h2 className="text-2xl font-bold mb-4">Play Again?</h2>
                                <button
                                    onClick={() => handlePlayAgain()}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Play Again
                                </button>
                            </div>
                        </div>
                    )
                }
                <div className='w-72 mt-5 flex items-center justify-center gap-7'>
                    <select name="" id="" onChange={(e) => handleDifficulty(e)}>
                        <option value="easy" data-difficulty='21'>Easy</option>
                        <option value="medium" data-difficulty='18'>Medium</option>
                        <option value="hard" data-difficulty='16'>Hard</option>
                    </select>

                    <h1 className='text-white text-center my-4 text-2xl font-semibold'>MineGame</h1>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-5 gap-x-3 gap-y-3'>
                        {
                            minesArray && minesArray.length && minesArray.map((mine, idx) => {
                                return (
                                    <button
                                        key={mine.id}
                                        disabled={selectedMine.findIndex((item) => item.id == mine.id) !== -1 ? true : false}
                                        className={`${selectedMine.find((item) => item.id == mine.id) ? 'pointer-events-none' : ''}relative w-28 h-28 cursor-pointer flex justify-center items-center flip-container ${isDiamond ? selectedMine.find((item) => item.id === mine.id) ? 'flipped' : '' : 'flipped'}`}
                                        onClick={() => handleSelectedMine(mine, idx)}
                                    >
                                        <div className="flipper">
                                            <div className='front absolute bg-green-500 w-full h-full flex justify-center items-center'>
                                            </div>
                                            <div className={`back absolute bg-gray-900 w-full h-full flex justify-center items-center`} style={{
                                                opacity: `${selectedMine.find((item) => item.id === mine.id) ? '1' : '0.5'}`
                                            }}>
                                                <mine.icon size={56} color={mine.isBomb ? 'red' : 'green'} />
                                            </div>
                                        </div>
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default MineGame