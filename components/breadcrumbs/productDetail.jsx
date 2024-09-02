import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [])

    console.log(detail)

    return (
        <div>
            {
                detail && (
                    <div>
                        <p>{detail.title}</p>
                        <img src={detail.thumbnail} alt="" />
                        <p>{detail.price}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetail