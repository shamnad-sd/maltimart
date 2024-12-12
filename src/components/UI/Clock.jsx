import React, { useEffect, useState } from 'react';

const Clock = () => {
    // Initialize the timer with 24 days, 10 hours, and 50 minutes
    const initialDays = 24;
    const initialHours = 10;
    const initialMinutes = 50;
    const initialSeconds = 0;

    // Calculate total initial time in seconds
    const totalInitialSeconds = (initialDays * 24 * 60 * 60) + (initialHours * 60 * 60) + (initialMinutes * 60) + initialSeconds;

    const [remainingTime, setRemainingTime] = useState(totalInitialSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    return 0; // Stop the timer when it reaches 0
                }
                return prevTime - 1; // Decrement the time by 1 second
            });
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array to run only once

    // Calculate days, hours, minutes, and seconds from remaining time
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    return (
        <div className="timer__wrapper flex items-center gap-3">
            <div className="timer__data flex items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{days}</h1>
                    <h5 className='text-white fs-6'>Days</h5>
                </div>
                <span className='text-white fs-4'>:</span>
            </div>

            <div className="timer__data flex items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{hours}</h1>
                    <h5 className='text-white fs-6'>Hours</h5>
                </div>
                <span className='text-white fs-4'>:</span>
            </div>

            <div className="timer__data flex items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{minutes}</h1>
                    <h5 className='text-white fs-6'>Minutes</h5>
                </div>
                <span className='text-white fs-4'>:</span>
            </div>

            <div className="timer__data flex items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{seconds}</h1>
                    <h5 className='text-white fs-6'>Seconds</h5>
                </div>
            </div>
        </div>
    );
};

export default Clock;