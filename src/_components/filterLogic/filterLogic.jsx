import React, { useEffect, useState } from 'react'
import { FcStart } from 'react-icons/fc'
import { MdStarRate, MdStart } from 'react-icons/md'

function FilterLogic() {

    const [mainData, setMainData] = useState([])
    const [categoryProduct, setCategoryProduct] = useState([])
    const [findMaximumPrice, setFindMaximumPrice] = useState(0)
    const [priceRange, setPriceRange] = useState(0)
    const [copyData, setCopyData] = useState([])

    // 
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedRating, setSelectedRating] = useState(0)
    // 

    async function fetchData() {
        try {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setMainData(data.products)
            setCopyData(data.products)
        } catch (error) {
            console.log('error to fetch : ', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (mainData && mainData.length) {
            mainData.map((cate) => {
                setCategoryProduct(prev => [...new Set([...prev, cate.category])])
            })
        }
        let max = 0

        if (mainData && mainData.length) {
            for (let i = 0; i < mainData.length; i++) {
                if (mainData[i].price > max) {
                    max = mainData[i].price
                }
            }
            setFindMaximumPrice(max)
        }
    }, [mainData])

    console.log(findMaximumPrice)

    useEffect(() => {
        if (copyData && copyData.length) {
            function handleselectedCategory(data) {
                let data1 = data.filter((item) => {
                    return item.category.includes(selectedCategory)
                })
                handleSelectingRating(data1)
            }

            function handleSelectingRating(selectedcategoryData) {
                let data2 = selectedcategoryData.filter((item) => {
                    return item.rating > selectedRating
                })
                handleSelectedPrice(data2)
                // setMainData(data2)
            }

            function handleSelectedPrice(selectedPriceData) {
                let data3 = selectedPriceData.filter((item) => {
                    return item.price > priceRange
                })
                setMainData(data3)
            }

            handleselectedCategory(copyData)
        }
    }, [selectedCategory, selectedRating, priceRange])

    // console.log(selectedCategory, selectedRating)

    return (
        <>
            <div className='ml-5'>
                <div className='category-container space-y-2'> {/* Added spacing between category items */}
                    {
                        categoryProduct && categoryProduct.length && categoryProduct.map((cate, idx) => {
                            return (
                                <div key={idx} className='flex items-center'> {/* Flex to align items */}
                                    <input
                                        id={cate}
                                        type="radio"
                                        name="category"
                                        value={cate}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className='mr-2'
                                    />
                                    <label htmlFor={cate} className='cursor-pointer'>{cate}</label> {/* Pointer cursor for better UX */}
                                </div>
                            );
                        })
                    }

                    <div className='my-5 flex items-center gap-2 max-w-72'>
                        <div>0</div>
                        <input
                            type="range"
                            value={priceRange}
                            max={findMaximumPrice}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className='flex-1 mx-2' // Ensures the range input takes available space
                        />
                        <div>{findMaximumPrice}</div>
                        <div>{priceRange}</div>
                    </div>

                    <div className='space-y-2'>
                        {
                            Array.from({ length: 5 }).map((item, idx) => {
                                return (
                                    <div key={idx} className='flex items-center'>
                                        <input
                                            id={idx + 1}
                                            type="radio"
                                            name="start"
                                            value={idx + 1}
                                            onChange={(e) => setSelectedRating(e.target.value)}
                                            className='mr-2'
                                        />
                                        <label htmlFor={idx + 1} className='cursor-pointer'>Star : {idx + 1}</label>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className='flex flex-wrap m-5 max-w-[1200px]'>
                    {
                        mainData && mainData.map((item) => {
                            return (
                                <div key={item.id} className='flex flex-col border w-56 p-5'>
                                    <img className='w-56 h-40 object-cover' src={item.thumbnail} alt="" /> {/* Fixed height for images */}
                                    <p><b>Name</b>: {item.title}</p>
                                    <p><b>Price</b>: ${item.price}</p>
                                    <p className='flex items-center gap-2'><b>Rating</b>: <MdStarRate />{item.rating}</p>
                                    <p><b>Category</b>: {item.category}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default FilterLogic