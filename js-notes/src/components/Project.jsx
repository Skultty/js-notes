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
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <AddNoteModal createNote={createNote} />
      </div>
      <div className="flex w-full">
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
    </div>
  );
}

export default Project;
