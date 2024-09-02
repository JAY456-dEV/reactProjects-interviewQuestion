import React from 'react'

function ExpenseHistory({ props, getDeleteId }) {
    const { text, value, checkInEx, id } = props

    function handleDelete(id) {
        getDeleteId(id)
    }

    return (
        <>
            <div className='main-history'>
                <div className='hover-delete' onClick={() => handleDelete(id)}>❌</div>
                <div className='history-card'>
                    <p>{text}</p>
                    <p>{value}</p>
                    <div className='incsign' data-check={[checkInEx]}></div>
                </div>
            </div >
        </>
    )
}

export default ExpenseHistory