import React, { useEffect, useState } from 'react'
import './cryptoconverter.css'

function CryptoConverter() {

    const [currencyValue, setCurrencyValue] = useState(0)
    const [userValue, setUserValue] = useState(1)
    const [isUp, setIsUp] = useState(false)
    const [diff, setDiff] = useState(0)
    const [currencyType, setCurrencyType] = useState('usd')

    async function fetchCryptoCurrency() {
        const response = await fetch(`https://api.frontendeval.com/fake/crypto/${currencyType}`)
        const data = await response.json()
        const show = data.value * userValue
        setCurrencyValue(show.toFixed(2))

        const prevValue = window.sessionStorage.getItem('prevVal')
        const diff = show.toFixed(2) - prevValue
        diff < 0 ? setIsUp(false) : setIsUp(true)
        setDiff(diff)

        window.sessionStorage.setItem('prevVal', show.toFixed(2))
    }

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => {
            fetchCryptoCurrency()
        }, 2000)

        return (() => clearInterval(intervalId))
    }, [userValue, currencyType])

    function handleCurrency(e) {
        setCurrencyType(e.target.value)
    }


    return (
        <>
            <div className='main-crypto'>
                <h1>Crypto Currency Converter</h1>
                <div className='curreny'>
                    <div className='select-setValue'>
                        <input type="number" value={userValue} onChange={(e) => setUserValue(e.target.value)} className='text-black' />
                        <select onChange={handleCurrency} className='text-black'>
                            {['usd', 'eur', 'gbp', 'cny', 'jpy'].map((curr, idx) => {
                                return (
                                    <option key={idx} value={curr}>{curr}</option>
                                )
                            })}
                        </select>
                    </div>

                    <h2 >{currencyValue} {'WUC'} <span style={{ color: isUp ? 'green' : 'red' }}>{isUp ? '↑' : '↓'}{diff.toFixed(2)}</span></h2>
                </div>
            </div>
        </>
    )
}

export default CryptoConverter