import React, { useEffect, useState } from 'react'
import './password.css'
import {
    hasNumber,
    hasLowerCase,
    hasUpperCase,
    hasSpacialChar
} from './utils'

function PasswordLength() {

    const [password, setPassword] = useState('')
    const [progressStyle, setProgressStyle] = useState({
        width: '0%',
        backgroundColor: 'tranparent'
    })
    const [strength, setStrength] = useState(0)

    function handleInput(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        const updatedProgressBar = {
            backgroundColor: 'red'
        }

        let totalstrength = 0;

        if (password.length > 3) {
            const strengthByLength = Math.min(6, Math.floor(password.length / 3))

            let strengthByCharType = 0

            if (hasNumber.test(password)) {
                strengthByCharType += 1
            }

            if (hasUpperCase.test(password)) {
                strengthByCharType += 1
            }

            if (hasLowerCase.test(password)) {
                strengthByCharType += 1
            }

            if (hasSpacialChar.test(password)) {
                strengthByCharType += 1
            }

            totalstrength = strengthByLength + strengthByCharType
        } else {
            totalstrength = 0
        }

        updatedProgressBar.width = `${totalstrength * 10}%`
        if (totalstrength > 8) {
            updatedProgressBar.backgroundColor = 'green'
        } else if (totalstrength > 6) {
            updatedProgressBar.backgroundColor = 'orange'
        }
        setProgressStyle(updatedProgressBar)

        setStrength(totalstrength)
    }, [password])

    return (
        <>
            <div className='main-password'>
                <div>
                    <input type="text" value={password} placeholder='enter password' onChange={handleInput} />
                </div>
                <div className='progress-password'>
                    <div className='progressbar-password' style={{ ...progressStyle }}></div>
                    <p>Strength of your password(out of 10) is {strength}</p>
                </div>
            </div >
        </>
    )
}

export default PasswordLength