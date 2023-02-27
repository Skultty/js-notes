import React from "react";

function Note({ title, description, dueDate, priority }) {
  return (
    <div className="p-2 bg-slate-200 rounded m-2">
      <h1 className="font-bold">{title}</h1>
      <p>{dueDate}</p>
      <p>priority: {priority}</p>
      <p>{description}</p>
    </div>
  );
}

export default Note;
