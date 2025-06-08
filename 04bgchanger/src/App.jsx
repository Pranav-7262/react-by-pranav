import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive"); // Default background color
  // You can change the default color to any valid CSS color
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap shadow-lg justify-center gap-3 bg-white  px-3 py-2 rounded-2xl">
          <button
            onClick={() => setBgColor("red")} // Change background color to red
            className="outline-none px-4 py-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("green")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("blue")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("Pink")}
            className="outline-none px-4 py-1 rounded-full cursor-pointer"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("White")}
            className="outline-none px-4 py-1 rounded-full border-2 border-gray-300 cursor-pointer"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
