import { useCallback, useState } from "react";

import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    // console.log("incrementing count");
    setCount((prevCount) => prevCount + 1); //This avoids issues with stale values and lets you keep an empty dependency array ([]).
  }, []);
  return (
    <div>
      <div>count : {count}</div> <br />
      <div>
        <button onClick={handleIncrement}>Increment count</button>
      </div>
      <br />
      <div>
        <ChildComponent onClick={handleIncrement} btnName="Click me!" />
      </div>
    </div>
  );
}

export default App;
