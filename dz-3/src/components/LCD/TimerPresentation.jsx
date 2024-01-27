import React from "react";


const TimerPresentation = ({paused, formattedTime, onPauseButton }) => {
    return (
      <div>
        <div>{formattedTime}</div>
        <button onClick={onPauseButton}>{paused ? 'Відновити' : 'Пауза'}</button>
      </div>
    );
};

export default TimerPresentation;