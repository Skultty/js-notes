import React from "react";
import Note from "./Note";
import { useState, useEffect } from "react";
import AddNoteModal from "./addNoteModal";

function Project({ title }) {
  const [notes, setNotes] = useState([]);
  function createNote(title, description, dueDate, priority) {
    if (notes.some((note) => note.title === title)) {
      return;
    }
    priority = priority ? priority : "low";
    const newNote = { title, description, dueDate, priority };
    setNotes([...notes, newNote]);
    addToLocalStorage(newNote);
  }

  function addToLocalStorage(newNote) {
    localStorage.setItem(title + " Notes", JSON.stringify([...notes, newNote]));
  }

  useEffect(() => {
    const notesStr = JSON.parse(localStorage.getItem(title + " Notes"));
    if (notesStr) {
      const notesArr = notesStr.map((note) => {
        return {
          title: note.title,
          description: note.description,
          dueDate: note.dueDate,
          priority: note.priority,
        };
      });
      setNotes(notesArr);
    }
    console.log(notesStr);
  }, []);

  return (
    <div className="project">
      <h1>{title}</h1>
      <AddNoteModal createNote={createNote} />
      {notes.map((note) => (
        <Note
          key={note.title}
          title={note.title}
          description={note.description}
          dueDate={note.dueDate}
          priority={note.priority}
        />
      ))}
    </div>
  );
}

export default Project;
