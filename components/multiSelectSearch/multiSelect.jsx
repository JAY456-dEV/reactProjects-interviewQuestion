import React, { useEffect, useRef, useState } from 'react'
import './multiplesearch.css'
import SelectedData from './selectedData'

const MultiSelect = () => {

    const [query, setQuery] = useState("")
    const [allData, setAllData] = useState([])
    const [storeFilterSelected, setStoreFilterSelected] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    const [inputTopLeft, setInputTopLeft] = useState({
        top: 0,
        left: 0
    })

    const inputRef = useRef()

    async function fetchData() {
        if (query !== '') {
            const response = await fetch(`https://dummyjson.com/users/search?q=${query}`)
            const data = await response.json()
            console.log(data)
            setAllData(data.users)
        }
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    useEffect(() => {
        fetchData()
    }, [query])

    function handleSingleSelect(userDetail) {
        let seeUserExist = storeFilterSelected.find((user) => user.id == userDetail.id)

        if (seeUserExist == undefined) {
            setStoreFilterSelected([...storeFilterSelected, userDetail])
            setSelectedUser([...selectedUser, userDetail.id])
            inputRef.current.focus()
        }
    }

    function handleSelectedDelete(id) {
        setStoreFilterSelected((prev) => prev.filter((item) => item.id !== id))
    }

    function handleBackspaceDelete(e) {
        if (e.keyCode === 8) {
            if (storeFilterSelected.length) {
                if (query === '') {
                    const copyArr = [...storeFilterSelected]
                    copyArr.splice(storeFilterSelected.length - 1, 1)
                    setStoreFilterSelected(copyArr)
                }
            }
        }
    }


    return (
        <>
            <div className='app-main-multi' ref={inputRef}>
                <div className='search-main'>
                    <div className='selectedData-main'>
                        {
                            storeFilterSelected && storeFilterSelected.length ? storeFilterSelected.map((user) => {
                                return <SelectedData key={user.id} user={user} handleSelectedDelete={handleSelectedDelete} />
                            }) : null
                        }
                    </div>
                    <input type="text" placeholder='Search' className='search-input' value={query} onChange={((e) => handleChange(e))} onKeyDown={(e) => handleBackspaceDelete(e)} />
                </div>

                {/* {
                    <div className='selectedData-main'>
                        {
                            storeFilterSelected && storeFilterSelected.length ? storeFilterSelected.map((item) => {
                                return <SelectedData item={item} handleSelectedDelete={handleSelectedDelete} />
                            }) : null
                        }
                    </div>
                } */}

                <div className='main-pos-SelectMenu'>
                    {
                        allData && allData.length ? (
                            <div className='filterData'>
                                {
                                    allData.map((user) => {
                                        return (
                                            selectedUser.indexOf(user.id) == -1 ? <div key={user.id} className='singleData' onClick={() => handleSingleSelect(user)}>
                                                <img src={user.image} alt="" width={'20px'} />
                                                <p>{user.firstName}</p>
                                            </div> : null
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