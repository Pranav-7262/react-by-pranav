import React from "react";
import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "pink", padding: 8 }}>
      <h1>Subject is : {subject} </h1>
    </div>
  );
}

export default Subject;
