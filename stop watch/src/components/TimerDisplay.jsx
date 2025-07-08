export default function TimerDisplay({ time }) {
  const mins = String(Math.floor(time / 60)).padStart(2,'0');
  const secs = String(time % 60).padStart(2,'0');

  return (
    <h1 className="timer">
      {mins}:{secs}
    </h1>
  );
}

