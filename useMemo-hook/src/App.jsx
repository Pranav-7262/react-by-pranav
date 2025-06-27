import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveTask = (number) => {
    console.log("inside expensive Task");
    for (let index = 0; index <= 1000000000; index++) {}
    return number * 2;
  };

  const myDoubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <div>count : {count}</div>
      <br />
      <input
        type="number"
        placeholder="enter numeber"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <div>Double value : {myDoubleValue}</div>
    </div>
  );
}

export default App;
