import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link} 
  from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <div className="container nav-links">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={< Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
