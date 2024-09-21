import React, { useRef } from 'react'

function Trellocate({ handleChange, editData }) {

    const category = [
        { label: 'todo' },
        { label: 'progress' },
        { label: 'completed' }
    ]

    const inputRef = useRef()
    const cateRef = useRef()

    function handleSub() {
        if (editData == null) {
            handleChange(inputRef.current.value, cateRef.current.value)
            inputRef.current.value = ''
        } else {
            handleChange(inputRef.current.value, cateRef.current.value, editData.id)
            inputRef.current.value = ''
        }
    }

    if (editData !== null) {
        inputRef.current.value = editData.name
        cateRef.current.value = editData.catogory
        // inputRef.current.value = ''
    }

    return (
        <>
            <div className='input inputrello'>
                <input type="text" placeholder='task' ref={inputRef} />
                <select ref={cateRef}>
                    {
                        category.map((item, idx) => {
                            return (
                                <option key={idx} value={item.label} >{item.label}</option>
                            )
                        })
                    }
                </select>
                <button onClick={handleSub}>Add</button>
            </div>
        </>
    )
}

export default Trellocate