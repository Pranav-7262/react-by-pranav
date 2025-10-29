import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plants from "./pages/Plants";
import PlantDetails from "./pages/PlantDetails";
import MyPlants from "./pages/MyPlants";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="explore" element={<Plants />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="my-plants" element={<MyPlants />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="*"
            element={
              <div className="bg-red-600 text-2xl text-white p-3">
                404 - Page Not Found
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
