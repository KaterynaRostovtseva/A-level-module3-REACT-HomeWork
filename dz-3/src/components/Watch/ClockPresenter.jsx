import React from "react";
import "./Clock.css"; 

const ClockPresenter = ({ seconds }) => {

    // Перетворення секунд в градуси для стрілок
    const second = (seconds / 60) * 360 + 90; 
    const minute = (seconds / 3600) * 360 + 90; 
    const hour = (seconds / 43200) * 360 + 90; 
  
    return (
      <div className="clock-container">
        <div className="hour-hand" style={{ transform: `rotate(${hour}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minute}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${second}deg)` }}></div>
        <div className="center"></div>
        <div className="clock-face"></div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hour) => (
          <div
            key={hour}
            className="hour-marker"
            style={{ transform: `rotate(${hour * 30}deg)` }}>
          </div>
        ))}
      </div>
    );
  };
  
  export default ClockPresenter;