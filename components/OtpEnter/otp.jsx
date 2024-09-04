import React, { useEffect, useRef, useState } from 'react';
import './otp.css'

function Opt() {
    const [otp, setOtp] = useState(Array.from({ length: 4 }).map(() => ''));
    const refInput = otp.map(() => useRef(null));

    const handleChange = (e, idx) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);
            if (idx < otp.length - 1) {
                refInput[idx + 1].current.focus();
            }
        }
    };

    const handleKeyDown = (e, idx) => {
        if (e.keyCode === 8) {
            const newOtp = [...otp];
            newOtp[idx] = '';
            setOtp(newOtp);
            if (idx > 0) {
                refInput[idx - 1].current.focus();
            }
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        if (/^\d{4}$/.test(paste)) {
            const newOtp = paste.split('');
            setOtp(newOtp);
            refInput[3].current.focus();
        }
    };

    useEffect(() => {
        if (refInput) {
            refInput[0].current.focus()
        }
    }, [])

    return (
        <div className='input-main'>
            {otp.map((val, idx) => (
                <div key={idx}>
                    <input
                        type="text"
                        maxLength="1"
                        ref={refInput[idx]}
                        value={val}
                        onChange={(e) => handleChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        onPaste={handlePaste}
                        className='inputOtp'
                    />
                </div>
            ))}
        </div>
    );
}

export default Opt;
