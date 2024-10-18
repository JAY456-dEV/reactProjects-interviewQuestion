import React, { useEffect, useState } from 'react'
import { numberWithCommas } from './config'

function EmiCalculator() {

    const tenureData = [12, 24, 36, 48, 60]

    const [emiAmountsData, setEmiAmountsData] = useState({
        cost: 0,
        interest: 10,
        fee: 1
    })

    const [downPayment, setDownPament] = useState(0)
    const [emi, setEmi] = useState(0)
    const [tenure, setTenure] = useState(12)

    function handleChange(e) {
        setEmiAmountsData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleCalculateEmi(downPayment) {
        if (!emiAmountsData.cost) return
        const loanAmount = emiAmountsData.cost - downPayment // totol amount of loan
        const rateOfInterest = emiAmountsData.interest / 100 // its convert interest into percentage
        const numOfYears = tenure / 12  // converting months into year

        const logicEmiAmount = (loanAmount * rateOfInterest * (1 + rateOfInterest) ** numOfYears) / ((1 + rateOfInterest) ** numOfYears - 1)
        console.log(logicEmiAmount)
        return Number(logicEmiAmount / 12).toFixed(0)
    }

    function handleDownPayment(e) {
        if (!emiAmountsData.cost) return
        const downPaymentNumber = Number(e.target.value)
        setDownPament(downPaymentNumber)

        const emiCount = handleCalculateEmi(downPaymentNumber)
        setEmi(emiCount)
    }

    function calculateDownPayment(emi) {
        if (!emiAmountsData.cost) return

        const downPaymentPercent = 100 - (emi / handleCalculateEmi(0)) * 100;
        return Number((downPaymentPercent / 100) * emiAmountsData.cost).toFixed(0)
    }

    useEffect(() => {
        if (!emiAmountsData.cost > 0) {
            setDownPament(0)
            setEmi(0)
        }
    }, [tenure, emiAmountsData.cost])

    function handleEmi(e) {
        if (!emiAmountsData.cost) return
        let emiNumber = Number(e.target.value)
        setEmi(emiNumber)


        const dp = calculateDownPayment(emiNumber)
        setDownPament(dp)
    }

    return (
        <div className='emi-main'>
            <div className='emi-heading'>
                <h1>EMI CALCULATOR</h1>

                <div className='emiCalculate'>
                    <div className=''>
                        <p>Total Cost of Asset</p>
                        <input type="number" value={emiAmountsData.cost} name='cost' className='outline-none' onChange={handleChange} />
                    </div>

                    <div className=''>
                        <p>Interest Rate (In %)</p>
                        <input type="number" value={emiAmountsData.interest} name='interest' className=' outline-none' onChange={handleChange} />

                    </div>

                    <div className=''>
                        <p>Processing Fee (In %)</p>
                        <input type="number" value={emiAmountsData.fee} name='fee' className=' outline-none' onChange={handleChange} />
                    </div>
                </div>

                <div className='input-emi'>
                    <div className='flex totalDownPayment'>
                        <p>Down Payment - </p>
                        <span> {numberWithCommas((Number(downPayment) + (emiAmountsData.cost - downPayment) * (emiAmountsData.fee / 100)).toFixed(0))} </span>
                    </div>
                    <input type="range" min={0} max={emiAmountsData.cost} value={downPayment} name='downPayment' onChange={handleDownPayment} />
                    <div className='rate-common'>
                        0
                        <b>{numberWithCommas(downPayment)}</b>
                        {emiAmountsData.cost}
                    </div>
                </div>

                <div className='input-emi'>
                    <div className='flex totalDownPayment'>
                        <p>Loan Per Month - </p>
                        {" "}
                        <span> {numberWithCommas((emi * tenure).toFixed(0))}</span>
                    </div>
                    <input type="range" min={handleCalculateEmi(emiAmountsData.cost)} max={handleCalculateEmi(0)} value={emi} name='emi' onChange={handleEmi} />
                    <div className='rate-common'>
                        {numberWithCommas(handleCalculateEmi(emiAmountsData.cost))}
                        0
                        <b>{numberWithCommas(emi)}</b>
                        {numberWithCommas(handleCalculateEmi(0))}
                    </div>
                </div>

                <div className='tenure-main'>
                    {
                        tenureData.map((item) => {
                            return (
                                <div className='tenure-per' onClick={() => setTenure(item)} style={{ backgroundColor: tenure == item ? 'rgb(40, 40, 147)' : '' }}> {item}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default EmiCalculator