import { useState } from "react";
import Project from "./components/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  return (
    <div className="App h-screen flex flex-col  bg-purple-200">
      <h1>JS Notes</h1>
      <Project title="Project 1" />
    </div>
  );
}

export default App;
