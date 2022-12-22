import React from "react";
import "./styles/App.css";
import "./styles/media-query.css";

// import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      {/* <AllProjects/> */}
    </React.Fragment>
  );
}

export default App;
