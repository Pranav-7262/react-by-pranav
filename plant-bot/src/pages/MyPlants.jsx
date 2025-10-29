// src/pages/MyPlants.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const MyPlants = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🌱 My Plants</h1>
      <p>You are logged in as {user.email}</p>
      <p>(Later we’ll add CRUD here)</p>
    </div>
  );
};

export default MyPlants;
