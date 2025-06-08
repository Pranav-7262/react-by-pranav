import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    //hence it will run only once when the component mounts ,  it controls the lifecycle of the component
    // This will run only once when the component mounts or updates!!
    console.log("useEffect called");
    // callOnce();
    // countChange(); // This will run every time count changes
    dataChange(); // This will run every time data changes
  }, [data]); // Dependency array with count
  function callOnce() {
    console.log("callOnce function called ");
  }
  function countChange() {
    console.log("Count changed", count);
  }
  function dataChange() {
    console.log("Data changed", data);
  }

  return (
    <>
      <h1 className="text-3xl my-2 text-white p-2">useEffect Hook Example</h1>
      <button
        className=" p-5 bg-sky-600 text-amber-50 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        count :{count}
      </button>
      <button
        className=" p-5 mx-2 bg-sky-600 text-amber-50 rounded-2xl"
        onClick={() => setData(data + 1)}
      >
        Data :{data}
      </button>
    </>
  );
}

export default App;
