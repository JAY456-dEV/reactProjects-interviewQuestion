import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './bread.css'

function Home() {

    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                const sliceData = data.products.slice(0, 6)
                setTrendingProducts(sliceData)
            })
    }, [])

    return (
        <>
            <div>
                <h2>Home Page</h2>
                <span>Trending products</span>

                <div className='product-grid'>

                    {
                        trendingProducts.map((product) => {
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

                    <Link to={'/products'} >
                        <button>View All Products</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home