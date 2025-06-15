import { Route, Routes, Link, Navigate } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./CollegeCompo/Student";
import Details from "./CollegeCompo/Details";
import Department from "./CollegeCompo/Department";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="dapartment" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to="/contact" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
