import React from 'react';
import './App.css';
import './media-query.css'
import Home from './components/Home';
/* ------------------------------------ Components ----------------------------------- */
import Navbar from "./components/Navbar"
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <React.Fragment >
      <Navbar/>
      <SocialMedia/>
      <Home/>
      <Skills/>
      <Projects/>
    </React.Fragment>
  );
}

export default App;
