import React, { useState } from 'react'

function AddTransiction({ getTransiction }) {

    const [amount, setAmount] = useState(0)
    const [text, setText] = useState()


    function handleTransiction() {
        getTransiction(text, amount)
    }

    return (
        <>
            <div>
                <h3>Add New Transiction</h3>
                <hr />
                <p>Text</p>
                <div className='enter-text'>
                    <input type="text" placeholder='Enter Text' onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <p>Amount</p>
                    <p>(negative - expense,positive - income) </p>
                </div>
                <div className='enter-text'>
                    <input type="text" placeholder='enter amount' onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='transictionbtn' onClick={handleTransiction}>Add Transiction</button>
            </div>
        </>
    )
}

export default AddTransiction