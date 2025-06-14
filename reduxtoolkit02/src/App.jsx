import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  resetvalue,
  incrementByamount,
} from "./features/counter/counterSlice";
function App() {
  const [amount, setamount] = useState(0);
  const count = useSelector((state) => state.counter.value); // Accessing the counter value from the Redux store using useSelector hook
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment()); // Dispatching the increment action to the Redux store
  };
  const handleDecrement = () => {
    dispatch(decrement()); // Dispatching the decrement action to the Redux store
  };

  const handleReset = () => {
    dispatch(resetvalue()); // Dispatching the reset action to the Redux store
  };
  const handleIncAmount = () => {
    dispatch(incrementByamount(amount)); // Dispatching the incrementByamount action with the amount from input
  };

  return (
    <div>
      <h1>Counter by Redux Toolkit</h1>
      <button onClick={handleIncrement}> + </button>
      <p>count : {count} </p>
      <button onClick={handleDecrement}> - </button>
      <br /> <br />
      <button onClick={handleReset}>RESET</button>
      <br />
      <input
        type="Number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setamount(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleIncAmount}>Increment by amount</button>
    </div>
  );
}

export default App;
