import React from "react";
import { useState } from "react";

function AddNoteModal(createNote) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    if (title === "") {
      return;
    }

    createNote.createNote(title, description, dueDate, priority);
  };

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add new task
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form className="grid grid-cols-3 grid-rows-4 p-2 items-center justify-items-center bg-white rounded-xl">
              <div className="flex flex-col items-center">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col items-center">
                <label>Due Date</label>
                <input
                  type="text"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <label>Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="border-2 border-gray-300 p-2 rounded-md w-full"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="h-full w-full col-span-3 row-span-2 flex flex-col items-center justify-center">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border-2 border-gray-300 rounded-md resize-none w-full h-full"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="border-2 p-2 rounded-md col-span-3 bg-blue-200 text-black active:bg-blue-500 hover:bg-blue-500 transition-colors"
              >
                Add Note
              </button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddNoteModal;
