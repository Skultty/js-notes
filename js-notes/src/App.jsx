import { useState } from "react";
import Project from "./components/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState("");
  const [newProjectName, setNewProjectName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const createProject = () => {
    if (projects.some((project) => project.title === newProjectName)) {
      return;
    }
    const newProjectComponent = <Project title={newProjectName} />;
    const newProject = {
      title: newProjectName,
      component: newProjectComponent,
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="App h-screen w-screen bg-gray-300 grid grid-cols-6 grid-rows-1">
      <div className="col-span-1 bg-gray-200">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button
            className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 w-3/4 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Create new
          </button>
          {showModal ? (
            <>
              <div className="w-full h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <form className="grid grid-cols-2 grid-rows-2  p-4 items-center justify-items-center bg-white rounded-xl">
                  <div className="flex flex-col items-center w-full col-span-2">
                    <label>Project Name</label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 p-2 rounded-md w-full h-full"
                      onChange={(event) =>
                        setNewProjectName(event.target.value)
                      }
                    />
                  </div>
                  <button
                    className="bg-blue-200 text-black active:bg-blue-500
                      font-bold px-6 py-3 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={createProject}
                  >
                    Create
                  </button>
                  <button
                    className="bg-blue-200 text-black active:bg-blue-500
                      font-bold px-6 py-3 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </>
          ) : null}
        </div>
        <div className="border-2 w-full border-slate-900 mt-2" />
        <div className="flex flex-col items-center">
          {projects.map((project) => {
            return (
              <button
                className="bg-blue-200 text-black active:bg-blue-500 
              font-bold px-6 w-3/4 py-3 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setCurrentProject(project.component)}
                key={project.title}
              >
                {project.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-span-5 bg-gray-100">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Notes</h1>
        </div>
        <div className="flex flex-col items-center">{currentProject}</div>
      </div>
    </div>
  );
}

export default App;
