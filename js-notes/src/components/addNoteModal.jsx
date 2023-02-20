import React from "react";
import { useState } from "react";

function AddNoteModal(createNote) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote.createNote(title, description, dueDate, priority);
  };

  return (
    <div className="modal">
      <h1>Add Note</h1>
      <form>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Due Date</label>
        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <label>Priority</label>
        <input
          type="text"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNoteModal;
