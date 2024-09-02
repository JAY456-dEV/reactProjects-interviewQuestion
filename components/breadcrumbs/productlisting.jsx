import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productlisting() {


    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products)
            })
    }, [])

    return (
        <div className='product-grid'>
            {
                Products.map((product) => {
                    return (
                        <div className='product-card' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt="" />
                                <h3>{product.title}</h3>
                                
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Productlisting