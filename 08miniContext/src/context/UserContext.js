import React from "react";

const UserContext = React.createContext(); //This creates a new Context object.
console.log("user context :", UserContext);
export default UserContext;
//The value passed into React.createContext() is the default value. You left it empty, which is fine because you'll provide the actual value later via a Provider
