import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LogoutButton from "./Logout";
import Profile from "./Profile";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("current user is :", user);
  return (
    <div className="app">
      <header>
        {isAuthenticated && <Profile />}
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <button onClick={(e) => loginWithRedirect()}>
            Login with Redirect
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
