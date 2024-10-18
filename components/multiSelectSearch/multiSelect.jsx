import React, { useEffect, useState } from 'react'
import './multiplesearch.css'
import SelectedData from './selectedData'

const MultiSelect = () => {
    const [allData, setAllData] = useState([])
    const [query, setQuery] = useState('')

    async function fetchData() {
        if (query !== '') {
            const response = await fetch(`https://dummyjson.com/users/search?q=${query}`)
            const data = await response.json()
            setAllData(data.users)
        }
    }

    useEffect(() => {
        let intervalId;
        clearInterval(intervalId)
        intervalId = setTimeout(() => {
            fetchData()
        }, 500)

        return (() => clearInterval(intervalId))
    }, [query])
    console.log(allData)

    const [selectedUser, setSelectedUser] = useState([])

    function handleSelectedUser(user) {
        if (selectedUser.findIndex((item) => item.id == user.id) == -1) {
            setSelectedUser(prev => [...prev, user])
        }
    }

    function handleDelete(id) {
        let copySelectedUser = [...selectedUser]
        copySelectedUser = copySelectedUser.filter((item) => item.id !== id)
        setSelectedUser(copySelectedUser)
    }

    function handleKeyUp(e) {
        console.log(e)
        if (e.keyCode == 8) {
            if (selectedUser.length) {
                if (query == '') {
                    let copySelectedUser = [...selectedUser]
                    copySelectedUser.splice(selectedUser.length - 1, 1)
                    setSelectedUser(copySelectedUser)
                }
            }
        }
    }

    return (
        <>
            <div className='app-main-multi'>
                <div className='search-main'>
                    <div className='selectedData-main'>
                        {
                            selectedUser && selectedUser.map((user) => {
                                return <SelectedData key={user.id} user={user} handleDelete={handleDelete} />
                            })
                        }
                    </div>
                    <input type="text" placeholder='Search' className='search-input' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => handleKeyUp(e)} />
                </div>

                <div className='main-pos-SelectMenu'>
                    {
                        allData && allData.length ? (
                            <div className='filterData'>
                                {
                                    allData && allData.map((user) => {
                                        if (selectedUser.findIndex((item) => item.id == user.id) !== -1) {
                                            return
                                        }

                                        return (
                                            <div key={user.id} className='singleData' onClick={() => handleSelectedUser(user)}>
                                                <img src={user.image} alt="" width={'20px'} />
                                                <p>{user.firstName}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div >

        </>
    )
}

export default MultiSelect