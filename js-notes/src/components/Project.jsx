import React from "react";
import Note from "./Note";

function Project({ title, notes }) {
  return (
    <div className="project">
      <h1>{title}</h1>
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
    </div>
  );
}
