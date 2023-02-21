import React from "react";
import Note from "./Note";
import { useState } from "react";
import AddNoteModal from "./addNoteModal";

function Project({ title }) {
  const [notes, setNotes] = useState([]);

  function createNote(title, description, dueDate, priority) {
    if (notes.some((note) => note.title === title)) {
      return;
    }
    const newNote = { title, description, dueDate, priority };
    setNotes([...notes, newNote]);
  }
  return (
    <div className="project">
      <h1>{title}</h1>
      <AddNoteModal createNote={createNote} />
      {notes.map((note) => (
        <Note
          key={note.title}
          title={note.title}
          content={note.description}
          dueDate={note.dueDate}
          priority={note.priority}
        />
      ))}
    </div>
  );
}

export default Project;
