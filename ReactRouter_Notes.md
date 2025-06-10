# React Router Notes 🧭

React Router is a powerful library for handling routing in React applications. It enables dynamic routing and navigation across components without reloading the page.

---

## 📦 Installation

To get started, install `react-router-dom`:

```bash
npm install react-router-dom

## 🧱 Basic Setup
Import BrowserRouter and wrap your app:

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Your Routes here */}
    </BrowserRouter>
  );
}

## 🛣️ Defining Routes
Use <Routes> and <Route> to map paths:

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

## 🔗 Navigation
Use the Link component instead of <a>:
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>

##📍 useNavigate Hook
Programmatic navigation:
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/about");


##📌 useParams Hook
Get route parameters:
<Route path="/user/:id" element={<User />} />

// In User.jsx
const { id } = useParams();


## 🌐 useLocation Hook
Get current URL details:
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname);


| Concept            | Description                         |
| ------------------ | ----------------------------------- |
| `BrowserRouter`    | Wraps your whole app for routing    |
| `Routes` / `Route` | Used to define paths and components |
| `Link`             | Navigation without reloading        |
| `useNavigate`      | Programmatically redirect users     |
| `useParams`        | Access dynamic route parameters     |
| `useLocation`      | Get the current route details       |


📘 Learn More
React Router Docs
```
