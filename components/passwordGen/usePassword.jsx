import  { useState } from 'react'

function UsePassword() {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function generatePassword(checkBoxData, lengthRange) {
        let charset = ''
        let generatedPassword = ''

        let filterdCheckBox = checkBoxData.filter((input) => input.status)

        if (filterdCheckBox.length === 0) {
            setError('Select Any CheckBox')
            setPassword('')
            return 
        } 

        filterdCheckBox.forEach((inp) => {
            switch (inp.title) {
                case 'upperCase':
                    charset += 'ZXCVBNMASDFGHJKLQWERTYUIOP'
                    break;

                case 'lowerCase':
                    charset += 'asdfghjklzxcvbnmqwertyuio'
                    break;

                case 'number':
                    charset += '123456789'
                    break;

                case 'symbol':
                    charset += '!@#$&'
                    break
                default:
                    break;
            }
        })

        if (charset.length !== '') {
            for (let i = 0; i < lengthRange; i++) {
                generatedPassword += charset[Math.floor(Math.random() * charset.length)]
            }
            setError('')
        }
        setPassword(generatedPassword)
    }

    return { password, generatePassword, error }
}

export default UsePassword