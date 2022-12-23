import React from "react";
import "./styles/App.css";
import "./styles/media-query.css";
import "./styles/AllProjects.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/all_projects" element={<AllProjects />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
