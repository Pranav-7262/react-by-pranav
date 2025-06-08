import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";
// import Card2 from "./components/card2.jsx";

function App() {
  const [count, setCount] = useState(0);

  //make a object with a key and value
  let myObj = {
    name: "pranav",
    age: 20,
    isStudent: true,
  };
  let myarr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl hover:bg-slate-600 cursor-pointer mb-4">
        Tailwind Test
      </h1>
      <Card userName="Pranav" btnText="Click me!" abc={myarr} object={myObj} />
      <Card userName="manthan" abc={myarr} object={myObj} />
    </>
  );
}

export default App;
