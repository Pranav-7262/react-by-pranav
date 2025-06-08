import Demo from "./demo1.jsx";

function App() {
  // This is a simple React component that renders a div with the text "Hello, World!"
  const username = "Pranav Varpe"; // This is a variable that holds the username
  return (
    <div>
      <Demo />
      <h1>My name is Pranav</h1>
      <p>This is a simple React application.</p>
      <p>hello I am {username}</p>
    </div>
  );
}
export default App;

//talking about the .jsx file :
// 1. It is a JavaScript file that contains JSX syntax.
// 2. JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
// 3. The .jsx file is used to define React components.
// 4. It is typically used in React applications to create reusable UI components.
// 5. The .jsx file is transpiled to JavaScript by a build tool like Babel or Webpack.
//6.returns only one element, but you can return multiple elements by wrapping them in a parent element like a div or a fragment.
