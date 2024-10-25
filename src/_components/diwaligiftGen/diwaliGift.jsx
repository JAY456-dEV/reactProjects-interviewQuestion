import React, { useState } from 'react'

function DiwaliGift() {
    const [query, setQuery] = useState('')
    const [participantCollection, setParticipantCollection] = useState([])
    const [assignGift, setAssignGift] = useState(false)

    const gifts = ['crackers', 'decoration', 'frame', 'mobile', 'laptop']

    function handleGenrateGift() {
        // console.log(gifts[Math.floor(Math.random() * gifts.length)])
        return gifts[Math.floor(Math.random() * gifts.length)]
    }

    function handleAddparticipant() {
        setParticipantCollection(prev => [...prev, {
            id: crypto.randomUUID(),
            participantName: query,
            gift: null
        }])
        setQuery('')
    }

    function commonUpdateGiftFun() {
        let copyArr = [...participantCollection]
        copyArr = copyArr.map((person) => {
            return { ...person, gift: handleGenrateGift() }
        })
        setParticipantCollection(copyArr)
    }

    function handleAssignGift() {
        if (!assignGift && participantCollection.length > 0) {
            commonUpdateGiftFun()
            setAssignGift(true)
        } else {
            alert('Gift Are Already Assigned')
        }
    }

    function handleShuffleGift() {
        if (participantCollection.length > 0) {
            commonUpdateGiftFun()
        }
    }

    function handleReset() {
        let copyArr = [...participantCollection]
        copyArr = copyArr.map((person) => {
            return { ...person, gift: null }
        })
        setParticipantCollection(copyArr)
        setAssignGift(false)
    }

    function handleRemovePerson(personId) {
        setParticipantCollection((prev) => prev.filter(person => person.id !== personId))
    }

    return (
        <div>
            <h1>Diwali Gift Genrator</h1>
            <div className='text-black flex items-center justify-center mt-10 gap-2'>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Enter Participant Name' className='pl-1 outline-none py-[5px] w-56' />
                <div className='bg-gray-200 py-[5px] px-5 cursor-pointer' onClick={handleAddparticipant}>Add Person</div>
            </div>

            <div className='flex flex-col items-start mt-5 gap-3'>
                {
                    participantCollection && participantCollection.map((person) => {
                        return (
                            <div className='flex items-center gap-3' key={person.id}>
                                <p className='capitalize'>{person.participantName} - {person.gift == null ? 'No Gift Assigned' : `Gift-${person.gift}`}</p>
                                <div className='bg-gray-400 py-[5px] px-5 cursor-pointer' onClick={() => handleRemovePerson(person.id)}>Remove</div>
                            </div>
                        )
                    })
                }
                {
                    participantCollection && participantCollection.length > 0 && (
                        <div className='flex gap-2'>
                            <div className='bg-gray-400 py-[5px] px-5 cursor-pointer' onClick={handleAssignGift}>Assign Gift</div>
                            <div className='bg-gray-400 py-[5px] px-5 cursor-pointer' onClick={handleShuffleGift}>Shuffle Gift</div>
                            <div className='bg-gray-400 py-[5px] px-5 cursor-pointer' onClick={handleReset}>Reset</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DiwaliGift