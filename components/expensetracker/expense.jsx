import React, { useState } from 'react'
import ExpenseHistory from './expenseHistory'
import '../expensetracker/expense.css'
import AddTransiction from './addTransiction'

function Expense() {

    const [balance, setBalance] = useState(1000)
    const [history, setHistory] = useState([])

    function getTransiction(text, value) {
        if (text) {
            setBalance(eval(`${balance}${value}`))
            setHistory([...history, { id: crypto.randomUUID(), text, value, checkInEx: value.includes('+') ? true : false }])
        }
    }

    function getDeleteId(id) {
        const copyHistory = [...history]
        const deleteIndex = copyHistory.findIndex((item) => item.id == id)
        copyHistory.splice(deleteIndex, 1)
        setHistory(copyHistory)
    }


    return (
        <div className='main-width-expense'>
            <div className='expense-main'>
                <h1 className='expense-tag'>Expense Tracker</h1>

                <div className='main-balance'>
                    <p>Your Balance</p>
                    <h2>${balance}.00</h2>
                </div>

                <div className='inc-exp'>
                    <div className='income common-income'>
                        <p>Income</p>
                        <h5>${history.map((item) => {
                            if (item.checkInEx == true) {
                                return item
                            }
                        }).filter((hist) => {
                            if (hist !== undefined) {
                                return hist.value
                            }
                        }).reduce((acc, curr) => {
                            return eval(`${acc}${curr.value}`)
                        }, 0)
                        }.00</h5>
                    </div>
                    <div className='expense common-income'>
                        <p>expense</p>
                        <h5>${history.map((item) => {
                            if (item.checkInEx == false) {
                                return item
                            }
                        }).filter((hist) => {
                            if (hist !== undefined) {
                                return hist.value
                            }
                        }).reduce((acc, curr) => {
                            return eval(`${acc}${curr.value}`)
                        }, 0)}</h5>
                    </div>
                </div>
                <h3>History</h3>
                <hr />
                {
                    history.map((his, idx) => {
                        return <ExpenseHistory props={his} key={his.id} getDeleteId={getDeleteId} />
                    })
                }
                <AddTransiction getTransiction={getTransiction} />
            </div>
        </div>
    )
}

export default Expense