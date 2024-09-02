// import React, { useEffect, useState } from 'react'
// import './password.css'

// function PasswordGen() {

//     // const [passLength, setPassLength] = useState(0)
//     const [checkInclude, setCheckInclude] = useState({})
//     const [rangePass, setRangePass] = useState(0)
//     const [Password, setPassword] = useState('')
//     const [mainGenratedPass, setMainGenratedPass] = useState('')


//     function handleChange(e) {
//         setCheckInclude({ ...checkInclude, [e.target.name]: e.target.checked })
//     }

//     function handleGenPass() {
//         if (checkInclude.uppercase && !Password.includes('ASDFGHJKLZXCVBNMQWERTYUIOP')) {
//             setPassword((prev) => prev + 'ASDFGHJKLZXCVBNMQWERTYUIOP')
//         }

//         if (checkInclude.lowercase && !Password.includes('asdfghjklzxcvbnmqwertyuiop')) {
//             setPassword((prev) => prev + 'asdfghjklzxcvbnmqwertyuiop')
//         }

//         if (checkInclude.number && !Password.includes('123456789')) {
//             setPassword((prev) => prev + '123456789')
//         }

//         if (checkInclude.symbol && !Password.includes('@#$&!')) {
//             setPassword((prev) => prev + '@#$&!')
//         }

//         if (Password !== '') {
//             let generatedPassword = '';
//             for (let i = 0; i < rangePass; i++) {
//                 generatedPassword += Password[Math.floor(Math.random() * Password.length)];
//             }
//             setMainGenratedPass(generatedPassword);
//         }
//     }

//     function handleCopy() {
//         navigator.clipboard.writeText(mainGenratedPass)
//     }


//     console.log(mainGenratedPass);

//     return (
//         <>
//             <div className='password-main'>
//                 <div className='top-detail'>
//                     <h2>{mainGenratedPass}</h2>
//                     <button onClick={() => handleCopy()}>Copy</button>
//                 </div>

//                 <div>
//                     <div className='char-length-main'>
//                         <h2>Character Length</h2>
//                         <h2>{rangePass}</h2>
//                     </div>
//                     <div className='length-input'>
//                         <input type="range" value={rangePass} onChange={(e) => setRangePass(e.target.value)} />
//                     </div>
//                 </div>

//                 <div className='selectInput'>
//                     <div>
//                         <input type="checkbox" id='uppercase' name='uppercase' onChange={handleChange} />
//                         <label htmlFor="uppercase">Include Uppercase Letters</label>

//                         <input type="checkbox" id='lowercase' name='lowercase' onChange={handleChange} />
//                         <label htmlFor="lowercase">Include Lowercase Letters</label>
//                     </div>

//                     <div>
//                         <input type="checkbox" id='number' name='number' onChange={handleChange} />
//                         <label htmlFor="number">Include Number Letters</label>

//                         <input type="checkbox" id='symbol' name='symbol' onChange={handleChange} />
//                         <label htmlFor="symbol">Include Symbols Letters</label>
//                     </div>
//                 </div>

//                 <div className='checkStrength'>
//                     <p>Strength :</p>
//                     <p>Strong</p>
//                 </div>

//                 <div className='generate'>
//                     <button onClick={() => handleGenPass()}>GENERATE PASSWORD</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PasswordGen

import React, { useState } from 'react'
import './password.css'
import UsePassword from './usePassword'

function PasswordGen() {

    const [rangeLength, setRangeLength] = useState(0)
    const [inputData, setInputData] = useState([
        {
            title: 'upperCase',
            status: false
        },
        {
            title: 'lowerCase',
            status: false
        },
        {
            title: 'number',
            status: false
        },
        {
            title: 'symbol',
            status: false
        },
    ])

    const { password, generatePassword, error } = UsePassword()
    const [copied, setCopied] = useState(false)


    function handleChange(idx) {
        const copyInput = [...inputData]
        copyInput[idx].status = !copyInput[idx].status
        setInputData(copyInput)
    }


    function handleCopy() {
        if (password.length) {
            navigator.clipboard.writeText(password)
            setCopied(true)
        }
    }

    return (
        <>
            <div className='password-main'>
                <div className='top-detail'>
                    <h2>{password.length > 0 ? password : 'Password'}</h2>
                    <button onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
                </div>

                <div>
                    <div className='char-length-main'>
                        <h2>Character Length</h2>
                        <h2>{rangeLength}</h2>
                    </div>
                    <div className='length-input'>
                        <input type="range" onChange={(e) => setRangeLength(e.target.value)} />
                    </div>
                </div>

                <div className='selectInput'>
                    {
                        inputData.map((input, idx) => {
                            return (
                                <div key={idx}>
                                    <input type="checkbox" id={input.title} name='uppercase' onClick={() => handleChange(idx)} />
                                    <label htmlFor={input.title}>{input.title} </label>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='checkStrength'>
                    <p>Strength :</p>
                    <p>
                        {

                        }
                    </p>
                </div>
                {
                    <h4 style={{ color: 'red' }}>{error}</h4>
                }
                <div className='generate'>
                    <button onClick={() => generatePassword(inputData, rangeLength)}>GENERATE PASSWORD</button>
                </div>
            </div>
        </>
    )
}

export default PasswordGen