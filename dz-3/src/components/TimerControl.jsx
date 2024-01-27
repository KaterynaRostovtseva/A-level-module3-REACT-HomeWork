import React, { useState } from "react";
import Timer from "./Timer";

const TimerControl = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false );

const timerCreat = () =>{
  const h = Number(hours) * 3600;
  const m = Number(minutes)*60;
  const s = Number(seconds);
  const mySeconds = h+m+s;
  return mySeconds;
}

  const handleStartTimer = () => {
    setTimerStarted(true);
  };
  return (
    <div>
      <div>
        <label>
          Години:
          <input
            type="number" value={hours} onChange={(e) => setHours(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          Хвилини:
          <input
            type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          Секунди:
          <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)}/>
        </label>
      </div>
      <button onClick={() => {handleStartTimer()}} disabled={timerStarted}>Start</button>
      {timerStarted && <Timer seconds={timerCreat()} />}
    </div>
  );
};

export default TimerControl;