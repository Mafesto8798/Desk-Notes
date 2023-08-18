import React, { useState, useContext } from "react";
import { DeskNotesContext } from "../Context/DeskNotesContext";
import { NotesContext } from "../Context/NotesContext";
import { v4 as uuidv4 } from "uuid";

export default function CreateNoteModal() {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [deskNotes, setDeskNotes] = useContext(DeskNotesContext);
  const [notes, setNotes] = useContext(NotesContext);

  const addToDesk = () => {
    const newNote = { id: uuidv4(), title: noteTitle, content: noteContent };
    setDeskNotes([...deskNotes, newNote]);
    setNoteTitle("");
    setNoteContent("");
  };

  const addToNotes = () => {
    const newNote = { id: uuidv4(), title: noteTitle, content: noteContent };
    setNotes([...notes, newNote]);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <>
      <div
        className="modal fade "
        id="createNoteModal"
        tabIndex="-1"
        aria-labelledby="createNoteModal"
        aria-hidden={true}
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <form className="d-flex flex-column justify-content-center align-items-center p-3 m-auto modal-body w-75">
              <label className="text-start w-100 mb-1 mt-4">Note Title</label>
              <input
                type="text"
                placeholder="Some title..."
                className="form-control w-100 mb-4"
                maxLength={20}
                required
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
              <label className="text-start w-100 mt-3 mb-1">Note Content</label>
              <textarea
                className="form-control w-100"
                id="textArea"
                rows="10"
                style={{ resize: "none" }}
                required
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              ></textarea>
              <span className="d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-secondary m-3 text-light"
                  data-bs-dismiss="modal"
                  onClick={() => addToDesk()}
                >
                  Add To Desk
                </button>
                <button
                  type="button"
                  className="btn btn-primary m-3 text-light"
                  data-bs-dismiss="modal"
                  onClick={() => addToNotes()}
                >
                  Add To Notes
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
