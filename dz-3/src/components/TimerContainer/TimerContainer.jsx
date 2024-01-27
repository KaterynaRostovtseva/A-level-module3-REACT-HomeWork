import React, { useState, useEffect } from "react";

const TimerContainer = ({ seconds, refresh, render: RenderComponent }) => {
const [currentTime, setCurrentTime] = useState(seconds);

useEffect(() => {
  const startTime = Date.now();

  const intervalId = setInterval(() => {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    setCurrentTime(currentTime);
  }, refresh);

  return () => clearInterval(intervalId);
}, [refresh]);

return <RenderComponent seconds={currentTime} />;
}


export default TimerContainer;