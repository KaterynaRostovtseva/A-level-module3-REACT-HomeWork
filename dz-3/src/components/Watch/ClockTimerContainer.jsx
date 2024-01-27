import React, { useState, useEffect } from "react";

const ClockTimerContainer = ({ seconds, refresh, render: RenderComponent }) => {
const [currentTime, setCurrentTime] = useState(seconds);

useEffect(() => {
  const startTime = Date.now();

  const intervalId = setInterval(() => {
    const time = Math.floor((Date.now() - startTime) / 1000);
    setCurrentTime(time);
  }, refresh);

  return () => clearInterval(intervalId);
}, [refresh]);

return <RenderComponent seconds={currentTime} />;
}


export default ClockTimerContainer;