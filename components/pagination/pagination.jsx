import React, { useEffect, useState } from 'react'
import DataShow from './datashow'
import './pagination.css'
import Paginate from './paginate'

function Pagination() {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentData, setCurrentData] = useState([])
    const perPage = 10

    async function fetchData() {
        const response = await fetch('https://dummyjson.com/posts?limit=100')
        const data = await response.json()
        setData(data.posts)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // 3 * 10 = 30
    // slice(20 ,30)

    useEffect(() => {
        const lastPageIndex = currentPage * perPage
        const firstPageIndex = lastPageIndex - perPage
        let copyData = [...data]
        copyData = copyData.slice(firstPageIndex, lastPageIndex)
        setCurrentData(copyData)
    }, [currentPage, data])

    return (
        <>
            <div>Pagination</div>
            <DataShow props={currentData} />
            <Paginate setCurrentPage={setCurrentPage} perPage={perPage} totalDataLength={data && data.length} />
        </>
    )
}

export default Pagination