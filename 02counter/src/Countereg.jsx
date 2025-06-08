import React from "react";
import { useState } from "react";

let counter = 10;
function Countereg() {
  let [counter, setCount] = useState(0);

  const addValue = () => {
    counter += 1;
    setCount(counter);
    // setCount((prevCounter) => prevCounter + 1); // here we direct incrementing counter using prevCounter
    // setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);
    // setCount((prevCounter) => prevCounter + 1);
    console.log("after updation", counter);
  };
  const removeValue = () => {
    counter -= 1;
    setCount(counter);
    console.log("after updation", counter);
  };
  return (
    <>
      <h1>React day 5</h1>
      <h2>Counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <br />
      <p>footer {counter}</p>
    </>
  );
}

export default Countereg;
