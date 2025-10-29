import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  // console.log(import.meta.env.VITE_APPWRITER_URL); // Log the Appwrite URL
  const [loading, setLoading] = useState(true); // Initialize loading state
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if the user is logged in
    authService
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logOut());
        }
      })
      .catch((err) => {
        console.warn("App.jsx: Failed to get current user:", err.message);
        dispatch(logOut());
      })
      .finally(() => setLoading(false)); // Set loading to false after checking user
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO : <Outlet />{" "}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
