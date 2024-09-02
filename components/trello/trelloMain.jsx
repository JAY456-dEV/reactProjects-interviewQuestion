import React, { useState } from 'react'
import Trellocate from './trellocate'
import '../trello/trello.css'
import PrintByCategory from './printByCategory'

function TrelloMain() {

    const [data, setData] = useState({
        'todo': [],
        'progress': [],
        'completed': []
    })

    const [editData, setEditData] = useState(null)

    function handleChange(name, cate, id = null) {
        if (cate == editData?.catogory) {
            if (editData !== null) {
                let show = data[cate].map((cate) => {
                    if (cate.id === id) {
                        return { ...cate, name }
                    }
                    return cate
                })
                setData({ ...data, [cate]: show })
                setEditData(null)
            }
        } else {
            if (name !== '') {
                setData((prev) => ({ ...prev, [cate]: [...prev[cate], { name, id: crypto.randomUUID(), catogory: cate }] }))
                editData(null)
            }
        }
    }

    function EditItem(id, cate) {
        const show = data[cate].filter(data => data.id === id)
        setEditData(show[0])
    }

    function deleteItem(id, cate) {
        let show = data[cate].filter(category => category.id !== id)
        setData({ ...data, [cate]: show })
    }

    const categories = Object.keys(data)

    return (
        <>
            <Trellocate handleChange={handleChange} editData={editData} />
            <div className='cate-main'>
                {
                    categories.map((cato, idx) => {
                        return <div className='cate-partic' key={idx}>
                            <h2>{cato}</h2>
                            <div>
                                {
                                    data[cato].map((cateItem) => {
                                        return <PrintByCategory cateItem={cateItem} key={cateItem.id} EditItem={EditItem} deleteItem={deleteItem} />
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default TrelloMain