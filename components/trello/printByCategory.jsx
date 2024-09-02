import React from 'react'

function PrintByCategory({ cateItem, EditItem, deleteItem }) {
    return (
        <>
            <div className='catePrint'>
                <p>{cateItem.name}</p>
                <button onClick={() => EditItem(cateItem.id, cateItem.catogory)}>Edit</button>
                <button onClick={() => deleteItem(cateItem.id, cateItem.catogory)}>Delete</button>
            </div>
        </>
    )
}

export default PrintByCategory