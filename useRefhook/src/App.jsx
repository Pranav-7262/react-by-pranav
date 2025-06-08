import { useState, useRef } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  const inputOne = useRef(null); //
  // useRef is used to directly access DOM elements without re-rendering
  // It is useful for managing focus, text selection, or media playback
  const inputTwo = useRef(null);

  const getNumBox = () => {
    console.log("Number Box Value: ", inputOne.current.value);
    console.log("hello");
    inputOne.current.style.backgroundColor = "yellow";
    inputOne.current.style.width = "300px";
    inputOne.current.style.color = "black";
  };
  const getTextBox = () => {
    console.log("Text Box Value: ", inputTwo.current.value);
    console.log("world");
    inputTwo.current.style.backgroundColor = "green";
    inputTwo.current.style.width = "300px";
    inputTwo.current.style.color = "white";
  };
  return (
    <>
      <h2>Learnnnnnnnnnnnnnnn</h2>
      <input
        type="number"
        ref={inputOne} // ref is used to access the DOM element directly
        value={count}
        style={{ width: "200px" }}
        onChange={(e) => setCount(e.target.value)}
      />

      <input
        type="text"
        ref={inputTwo}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <h3>Value is : {count}</h3>
      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
}

export default App;
