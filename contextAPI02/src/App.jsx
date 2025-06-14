import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import College from "./College";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: 8 }}>
      <SubjectContext.Provider value={subject}>
        <select
          defaultValue={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
        </select>
        <h1>Context API </h1>

        <College />
        <button onClick={() => setSubject("")}>Clear Subject</button>
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
