import { Button } from "react-bootstrap";

export default function ControlButtons({ start, stop, reset, run }) {
  return (
    <div className="btn-box">
      {run ? (
        <Button variant="warning" onClick={stop}>
          Pause
        </Button>
      ) : (
        <Button variant="success" onClick={start}>
          Start
        </Button>
      )}
      <Button variant="danger" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}
