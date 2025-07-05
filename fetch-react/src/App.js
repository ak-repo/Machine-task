import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  return (
    <>
      {" "}
      <h1>Quates</h1>
      <FetchData />
    </>
  );
}

function FetchData() {
  const [quates, setQuate] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=10")
      .then((data) => data.json())
      .then((txt) => setQuate(txt.quotes.map((t) => t.quote)));
  }, []);
  console.log(Array.isArray(quates));
  //  setQuate(txt.quates)
  return (
    <>
      <Display quates={quates} />
    </>
  );
}

function Display({ quates }) {
  return (
    <div>
      {quates.map((q) => (
        <h1>{q}</h1>
      ))}
    </div>
  );
}

//
