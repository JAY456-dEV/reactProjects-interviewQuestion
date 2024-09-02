import React, { useRef, useState, useEffect } from 'react';
import './toastnew.css';

function ToastNew() {
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

    console.log(timerRef)

    function handleClose(id) {
        clearTimeout(timerRef.current[id]);
        clearInterval(intervalRef.current[id]);
        delete timerRef.current[id];
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

export default ToastNew;
