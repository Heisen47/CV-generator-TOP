// import React from 'react'
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Name from "./components/Naming.jsx";
import Education from "./components/education.jsx";
import Work from "./components/experience.jsx";
import Skills from "./components/skills.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="New">
    <div className="Components">
      <Name /> ,
      <Education />
      <Work />
      <Skills />
    </div>
    <div className="empty">
      <div className="header">Name</div>
      <div className="education"></div>
      <div className="work"></div>
      <div className="skills"></div>
    </div>
  </div>
);
