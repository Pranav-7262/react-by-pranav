import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// const anotherElement = ( // it is directly written in the main.jsx file , can be accessed in the App.jsx file as well
//   <a href="http://google.com" target='_blank'>visit google</a>

// )
function Ok() {
  // functions can be written
  return (
    <>
      <h1>pranav</h1>
      <p>I am very shy</p>
    </>
  );
}

const myVariable = "Pranav Varpe"; // This is a variable that holds the username

const reactElement = React.createElement(
  // "a",
  // { href: "http://google.com", target: "_blank" },
  // "visit google op link"
  "div",
  null,
  React.createElement("h1", null, "Hello, World!"),
  React.createElement("p", null, "This is a simple React application."),
  React.createElement("p", null, "Hello Again."),
  myVariable // can be easily get from outside the component as well
);

createRoot(document.getElementById("root")).render(
  // This is a simple React application that renders a div with the text "Hello, World!" and a paragraph with the text "This is a simple React application."
  <StrictMode>
    <Ok />
  </StrictMode>
  //anotherElement

  // reactElement
);
// here we can also write a function i.e App that returns a React component, which is then rendered into the root element of the HTML document using the createRoot method from the react-dom/client package.
// The StrictMode component is used to enable additional checks and warnings for the React application, helping to identify potential issues in the code.
