import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Members from "./components/members";
import Stats from "./components/stats";
import Gallery from "./components/gallery";

function App() {
  return (
    <Router>
      <header className="heada">
        <div className="logo">Team Lahti</div>
      </header>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/members">Members</Link> | 
        <Link to="/stats">Stats</Link> |
        <Link to="/gallery">Gallery</Link> |
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
