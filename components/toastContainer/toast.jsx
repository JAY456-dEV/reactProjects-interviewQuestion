// import React, { useRef, useState } from 'react'
// import './toast.css'

// function Toast() {

//     const [toasts, setToasts] = useState([])
//     const timerRef = useRef({})

//     const handleClose = (id) => {
//         clearTimeout(timerRef.current[id])
//         delete timerRef.current[id]
//         setToasts((prev) => {
//             const filteredArr = prev.filter((toast) => {
//                 return toast.id !== id
//             })
//             return filteredArr
//         })
//     }

//     const handleAdded = (message, type) => {
//         const id = crypto.randomUUID()
//         const newToasts = [...toasts, { id, message, type }]
//         setToasts(newToasts)
//         timerRef.current[id] = setTimeout(() => handleClose(id), 4000)
//     }

//     return (
//         <>
//             <div className='container'>
//                 <div className='toast-container'>
//                     {
//                         toasts.map(({ id, message, type }) => {
//                             return (
//                                 <div className={`toast ${type}`} key={id} >
//                                     {message}<span onClick={() => handleClose(id)}>X</span>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 <div className='btn-container'>
//                     <button onClick={() => handleAdded('Success', 'success')}>Success Toast</button>
//                     <button onClick={() => handleAdded('Info Added', 'info')}>Info Toast</button>
//                     <button onClick={() => handleAdded('Warning', 'warning')}>Warning Toast</button>
//                     <button onClick={() => handleAdded('Error', 'error')}>Error Toast</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Toast

// with progreebar 

import React, { useRef, useState, useEffect } from 'react';
import './toast.css';

function Toast() {
    const [toasts, setToasts] = useState([]);
    const timerRef = useRef({});
    const intervalRef = useRef({});

    const handleClick = (e) => {
        const { target } = e;
        const type = target.getAttribute('data-type');
        const id = crypto.randomUUID();

        setToasts([...toasts, { id, type, message: `${type} Notification`, counter: 0 }]);

        timerRef.current[id] = setTimeout(() => handleClose(id), 4000);
        handleProgress(id);
    };

    function handleClose(id) {
        clearTimeout(timerRef.current[id]);
        delete timerRef.current[id];

        clearInterval(intervalRef.current[id]);
        delete intervalRef.current[id];

        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    function handleProgress(id) {
        intervalRef.current[id] = setInterval(() => {
            setToasts((prevToasts) =>
                prevToasts.map((toast) =>
                    toast.id === id && toast.counter < 100
                        ? { ...toast, counter: toast.counter + 1 }
                        : toast
                )
            );
        }, 40);
    }

    useEffect(() => {
        return () => {
            Object.values(timerRef.current).forEach(clearTimeout);
            Object.values(intervalRef.current).forEach(clearInterval);
        };
    }, []);

    return (
        <div className="content">
            <h1>Add Notification</h1>
            <div className="actions">
                <button className="info" onClick={handleClick} data-type="INFO">
                    Info
                </button>
                <button className="success" onClick={handleClick} data-type="SUCCESS">
                    Success
                </button>
                <button className="warning" onClick={handleClick} data-type="WARNING">
                    Warning
                </button>
                <button className="error" onClick={handleClick} data-type="ERROR">
                    Error
                </button>
            </div>

            <div className='toast-container'>
                {toasts.map(({ id, message, type, counter }) => (
                    <div className={`toast ${type.toLowerCase()}`} key={id}>
                        {message}<span onClick={() => handleClose(id)}>X</span>
                        <div className='progress-bar' style={{ width: `${counter}%`, backgroundColor: 'black' }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Toast;
