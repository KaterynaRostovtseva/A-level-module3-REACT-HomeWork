import React, { useState, useEffect } from "react";

const Timer = ({ seconds }) => {
    const [time, setTime] = useState(seconds);
    const [paused, setPaused] = useState(0);

    useEffect(() => {
        let timer;

        if (!paused && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        };
        
        if (time === 0) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [paused, time]);

    const Pause = () => {
        setPaused(!paused); 
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600)/60);
        const seconds = time % 60;

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <div>{formatTime(time)}</div>
            <button onClick= {Pause}>{paused ? 'Відновити' : 'Пауза'}</button>
        </div>
    );
};

export default Timer;