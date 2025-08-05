import React from "react";
import { Greet } from "./Greet";

// Create a functional component called Welcome that returns a greeting message using JSX.
// Create a class component called Greet that returns a message like "Welcome to Class Component".
// Import and display both
// functionl component greetings,
function Fun() {
  return <h1> Welcome to Function based Components</h1>;
}
function App() {
  return (
    <div>
      <Fun />
      
      <Greet />
    </div>
  );
}
export default App;
