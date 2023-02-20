import React from "react";

function Note({ title, description, dueDate, priority }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{dueDate}</p>
      <p>{priority}</p>
    </div>
  );
}

export default Note;
