import React, { useEffect, useState } from 'react'

function DataPagination({ usersLength, perPage, setPerPage, setCurrentPage, currentPage }) {

    const [totalPage, setTotalPage] = useState([])

    useEffect(() => {
        const totalPageNum = Math.ceil(usersLength / perPage)
        setTotalPage(new Array(totalPageNum).fill(null))
    }, [usersLength, perPage, setPerPage])

    function handlePerPageChange(e) {
        setPerPage(e.target.value)
        setCurrentPage(1)
    }

    return (
        <div className='dataPage'>
            <select onChange={(e) => handlePerPageChange(e)} >
                <option value="5">Show 5</option>
                <option value="10">Show 10</option>
                <option value="20">Show 20</option>
            </select>
            <button onClick={() => setCurrentPage((prev) => prev == 1 ? prev = totalPage.length : prev - 1)}>Prev</button>
            {
                totalPage.map((item, idx) => {
                    return <div onClick={() => setCurrentPage(idx + 1)} key={idx}>
                        <button className='buttonTablePage' style={{ backgroundColor: currentPage == idx + 1 ? 'green' : '' }}>{idx + 1}</button>
                    </div>
                })
            }
            <button onClick={() => setCurrentPage((prev) => prev < totalPage.length ? prev + 1 : prev = 1)}>Next</button>
        </div>
    )
}

export default DataPagination