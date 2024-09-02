import React, { useEffect, useState } from 'react'
import './traffic.css'

function TrafficLight() {

    const [currentLightColor, setCurrentLightColor] = useState('green')

    const config = {
        red: {
            backgroundColor: 'red',
            duration: 4000,
            next: 'green',
        },
        yellow: {
            backgroundColor: 'yellow',
            duration: 500,
            next: 'red',
        },
        green: {
            backgroundColor: 'green',
            duration: 3000,
            next: 'yellow',
        },
    };
    const allLights = Object.keys(config)

    useEffect(() => {
        const { duration, next } = config[currentLightColor]
        let intervalId = setInterval(() => {
            setCurrentLightColor(next)
        }, duration)

        return () => {
            clearTimeout(intervalId);
        };
    }, [currentLightColor])

    return (
        <>
            <div className='main-traffic-bg'>
                {
                    allLights.map((lights, idx) => {
                        return (
                            <div key={idx} className='main-light-round' style={{ backgroundColor: `${currentLightColor == lights ? currentLightColor : ''}` }}></div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TrafficLight