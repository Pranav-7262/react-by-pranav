import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Snap from "./components/Snap";
import ViewSnap from "./components/ViewSnap";
import Docs from "./docs/Docs.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snaps" element={<Snap />} />
        <Route path="/snaps/:id" element={<ViewSnap />} />
        <Route path="/docs" element={<Docs />} />
        {/* Optional: 404 Route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
