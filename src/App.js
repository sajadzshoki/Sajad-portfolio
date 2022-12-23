import React from "react";
import "./styles/App.css";
import "./styles/media-query.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/all_projects" element={<AllProjects />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
