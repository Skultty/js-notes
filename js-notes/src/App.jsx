import { useState } from "react";
import AddNoteModal from "./components/addNoteModal";
import "./components/addNoteModal.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(title, description, dueDate, priority) {
    const newNote = { title, description, dueDate, priority };
    setNotes([...notes, newNote]);
  }

  return (
    <div className="App">
      <h1>JS Notes</h1>
      <AddNoteModal createNote={createNote} />
    </div>
  );
}

export default App;
