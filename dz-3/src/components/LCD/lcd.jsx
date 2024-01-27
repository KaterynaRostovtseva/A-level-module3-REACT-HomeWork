import React, { useState, useEffect } from "react"; 

const Lcd = ({ seconds, refresh, render: RenderComponent }) => {
    const [currentTime, setCurrentTime] = useState(seconds);
    const [paused, setPaused] = useState(false);
    
    useEffect(() => {
      const startTime = Date.now();
    
      let intervalId;

      if(!paused) {
        intervalId = setInterval(() => {
            const currentTime = Math.floor((Date.now() - startTime) / 1000);
            setCurrentTime(currentTime);
          }, refresh);
      }
        
    
      return () => clearInterval(intervalId);
    }, [paused, refresh]);


    const onPauseButton = () => {
        setPaused(!paused);
    }
      
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600)/60);
        const seconds = time % 60;

        return `${hours}:${minutes}:${seconds}`;
    }
    const formattedTime = formatTime(currentTime);
    
    return <RenderComponent paused ={paused} formattedTime={formattedTime}  onPauseButton={onPauseButton}/>;
   
    }
    
    export default Lcd;