import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext); //accept context object
  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h4>
        welcome {user.username} your email is {user.email} and your password is{" "}
        {user.password}{" "}
      </h4>
    </div>
  );
}

export default Profile;
