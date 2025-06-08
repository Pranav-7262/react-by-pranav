import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

let counter = 15;

function App() {
  let [count, setCount] = useState(0); //this is a hook that allows us to use state in functional components
  const addValue = () => {
    // console.log("addValue called", counter);
    counter += 1;
    setCount(counter);
    console.log("counter value after update", counter);
    //our task is to update the counter till only 20 is displayed
    if (counter >= 20) {
      alert("Counter has reached the maximum value of 20");
      counter = 20; // reset to 20 to prevent further increments
    }
  };
  const removeValue = () => {
    // console.log("removeValue c
    // alled", counter);
    counter -= 1;
    setCount(counter); // this will update the state and re-render the component
    console.log("counter value after update", counter);
    if (counter <= 0) {
      alert("Counter has reached the minimum value of 0");
      counter = 0; // reset to 0 to prevent further decrements
    }
    if (counter < 0) {
      counter = 0; // ensure counter does not go below 0
    }
  };
  const dblValue = () => {
    counter *= 2;
    setCount(counter);
    console.log("counter value after update", counter);

    if (counter >= 100) {
      alert("Counter has reached the maximum value of 20");
      counter = 100; // reset to 20 to prevent further increments
    }
  };
  const resetCounter = () => {
    console.log("resetting the counter !");
    alert("resetting the counter !");
    counter = 0;
    setCount(counter);
    console.log("counter value after update", counter);
  };
  return (
    <>
      <h1>React day 3</h1>
      <h2>Counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <button onClick={dblValue}>2x value {counter}</button>
      <br />
      <button onClick={resetCounter}>Reset Counter {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
