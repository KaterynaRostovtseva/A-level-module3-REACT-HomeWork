import './App.css';
import Timer from './components/Timer';
import TimerControl from './components/TimerControl';
import TimerContainer from './components/TimerContainer/TimerContainer';
import SecondsTimer from "./components/TimerContainer/SecondsTimer";
import TimerPresentation from './components/LCD/TimerPresentation';
import Lcd from './components/LCD/lcd';
import ClockPresenter from './components/Watch/ClockPresenter';
import ClockTimerContainer from './components/Watch/ClockTimerContainer';
import TimerControlContainer from './components/TimerControlContainer';
import Phonebook from './components/Phonebook'



function App() {

  return (
    <div className="App">
      <Timer seconds={3600}/>
      <hr/>
      <TimerControl/>
      <hr/>
      <TimerContainer seconds={1800} refresh={100} render={SecondsTimer}/>
      <hr/>
      <Lcd seconds={1800} refresh={100} render={TimerPresentation}/>
      <hr/>
      <ClockTimerContainer seconds={1800} refresh={100} render={ClockPresenter}/>
      <hr/>
      <TimerControlContainer/>
      <hr/>
      <Phonebook/>
    </div>
  );
}

export default App;
