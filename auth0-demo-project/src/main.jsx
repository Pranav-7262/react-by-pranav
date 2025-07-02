import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-4gu5sj1wv0n4xjqn.us.auth0.com"
    clientId="IG4DKf0JcMtyqblLBMlaWsi6BbbBP5ca"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
