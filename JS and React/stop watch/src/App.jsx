import { useState, useEffect, useRef } from "react";
import ControlButtons from "./components/ControlButtons";
import TimerDisplay from "./components/TimerDisplay";
import "./App.css";

export default function App() {
  const [time, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const intervelRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervelRef.current = setInterval(() => {
        setTimer((pre) => pre + 1);
      }, 1000);
    } else {
      clearInterval(intervelRef.current);
    }

    return () => clearInterval(intervelRef.current);
  }, [running]);

  const startRunning = () => setRunning(true);
  const stopRunning = () => setRunning(false);
  const resetRunning = () => {
    setRunning(false);
    setTimer(0);
  };

  return (
    <div className="box">
      <h2>⏱ React Stopwatch</h2>
      <TimerDisplay time={time} />
      <ControlButtons
        run={running}
        start={startRunning}
        stop={stopRunning}
        reset={resetRunning}
      />
    </div>
  );
}
