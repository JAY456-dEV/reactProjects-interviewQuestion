import React from 'react'

function ScrollData({ item }) {
    return (
        <>
            <div className='infinite-scroll'>
                <p>{item.title}</p>
            </div>
        </>
    )
}

export default ScrollData