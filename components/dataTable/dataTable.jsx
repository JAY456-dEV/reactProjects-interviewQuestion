import React, { useEffect, useState } from 'react'
import users from './userData'
import DataPagination from './dataPagination';
import './datatable.css'

function DataTable() {
    const [message, setMessage] = useState('Data Table');
    const [perPage, setPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [mainData, setMainData] = useState([])


    useEffect(() => {
        const lastPage = currentPage * perPage // 1 * 5 = 5 or 2 * 5 = 10
        const firstPage = lastPage - perPage
        const mainDataPerPage = users.slice(firstPage, lastPage)
        setMainData(mainDataPerPage)
    }, [users, perPage, currentPage])

    return (
        <div style={{ padding: '10px' }}>
            <h1 style={{ marginBottom: '25px' }}>{message}</h1>
            <table>
                <thead>
                    <tr>
                        {[
                            { label: 'ID', key: 'id' },
                            { label: 'Name', key: 'name' },
                            { label: 'Age', key: 'age' },
                            { label: 'Occupation', key: 'occupation' },
                        ].map(({ label, key }) => (
                            <th key={key}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {mainData.map(({ id, name, age, occupation }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DataPagination usersLength={users.length} perPage={perPage} setPerPage={setPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    );
}

export default DataTable