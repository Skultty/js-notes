import React from "react";
import Note from "./Note";
import { useState } from "react";

function Project({ title, notes }) {
  return (
    <div className="project">
      <h1>{title}</h1>
      {notes.map((note) => (
        <Note
          title={note.title}
          content={note.description}
          dueDate={note.dueDate}
          priority={note.priority}
        />
      ))}
    </div>
  );
}
