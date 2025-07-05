import React, { useReducer } from "react";

const reducerfunction = (state, action) => {
  //   console.log(state, action);
  if (action.type == "INCREMENT") {
    if (state == 10) {
      alert("stop");
      state = 0;
    }
    return state + 1;
  }

  if (action.type == "DECREMENT") {
    if (state == 0) {
      alert("stop");
      state = 0;
    }
    return state - 1;
  }
};
const index = () => {
  const [count, dispatch] = useReducer(reducerfunction, 0);
  //   console.log(useReducer(reducerfunction,7));
  return (
    <>
      <h3>lets learn about useReucer hook</h3>
      <p>count : {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </>
  );
};

export default index;
