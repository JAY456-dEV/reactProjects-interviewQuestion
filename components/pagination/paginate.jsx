import React from 'react'

function Paginate({ setCurrentPage, perPage, totalDataLength }) {

    const totalpage = []

    for (let i = 1; i < Math.ceil(totalDataLength / perPage); i++) {
        totalpage.push(i)
    }

    function handlePage(pagenum) {
        setCurrentPage(pagenum)
    }

    return (
        <>
            <div>
                <ul className='main-paginate'>
                    {
                        totalpage.map((page, idx) => {
                            return <div className='paginate' onClick={() => handlePage(page)} key={idx}>
                                <li>{page}</li>
                            </div>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Paginate