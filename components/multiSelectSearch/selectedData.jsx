import React from 'react'

function SelectedData({ user, handleDelete }) {
    return (
        <>
            <div className='selectedData'>
                <p>{user.firstName} {user.lastName}</p>
                <div onClick={() => handleDelete(user.id)}><i className="fa-solid fa-xmark"></i></div>
            </div>
        </>
    )
}

export default SelectedData