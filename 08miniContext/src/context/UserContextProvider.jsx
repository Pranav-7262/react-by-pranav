import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  //as  a props
  const [user, setUser] = useState(null); //supplies user-related data
  return (
    // wraps the children in a UserContext.Provider
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
//Any component inside this provider can access user and setUser using the useContext(UserContext) hook.
//Provider writes something on it (like user data).

//Any component using useContext(UserContext) can read (and update) from that whiteboard.
