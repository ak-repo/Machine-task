import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("white");

  function ChangeTheme() {
    setColor((color) => (color === "white" ? "black" : "white"));
  }
  document.querySelector("body").style.backgroundColor = color;

  console.log(color);
  return (
    <div className="app">
      <Theme bg={ChangeTheme} />
    </div>
  );
}

function Theme({ bg }) {
  return <button onClick={bg}>Switch Theme</button>;
}

export default App;
