import { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-white ">Redux Toolkit</h1>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
