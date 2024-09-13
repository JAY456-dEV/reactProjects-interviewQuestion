import React, { useEffect, useState } from 'react'
import '../ImgGallary/imgGallary.css'

function ImgGallary() {

    const [albumData, setAlbumData] = useState([])
    const [currentId, setCurrentId] = useState(null)
    const [storeAlbumById, setStoreAlbumById] = useState({})

    const [mainUrlShow, setMainUrlShow] = useState('')

    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const data = await response.json()
        setAlbumData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (albumData && albumData.length) {
            const copystoreAlbumById = { ...storeAlbumById }
            albumData.map((album) => {
                if (copystoreAlbumById[album.albumId]) {
                    copystoreAlbumById[album.albumId] = [...copystoreAlbumById[album.albumId], album]
                } else {
                    copystoreAlbumById[album.albumId] = [album]
                }
            })
            setStoreAlbumById(copystoreAlbumById)
        }
    }, [albumData])

    return (
        <>
            <div className='album-main'>
                {
                    storeAlbumById && Object.keys(storeAlbumById).map((albumId) => {
                        return <p key={albumId} onClick={() => setCurrentId(albumId)}>Album {albumId}</p>
                    })
                }
            </div>

            <div className='popupAlbum'>
                <div className='album'>
                    {
                        storeAlbumById && storeAlbumById[currentId] && storeAlbumById[currentId].map((album) => {
                            return <img key={album.albumId} src={album.thumbnailUrl} alt="" onClick={() => setMainUrlShow(album.url)} />
                        })
                    }
                </div>
            </div>

            <div className='mainUrl'>
                {
                    mainUrlShow && <img src={mainUrlShow} alt="" />
                }
            </div>
        </>
    )
}

export default ImgGallary