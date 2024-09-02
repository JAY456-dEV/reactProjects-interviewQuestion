import React from 'react'

function SelectedData({ user, handleSelectedDelete }) {
    return (
        <>
            <div className='selectedData'>
                <p>{user.firstName} {user.lastName}</p>
                <div onClick={() => handleSelectedDelete(user.id)}><i className="fa-solid fa-xmark"></i></div>
            </div>
        </>
    )
}

export default SelectedData