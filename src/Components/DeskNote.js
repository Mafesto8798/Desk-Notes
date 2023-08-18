import React, { useContext, useState, useEffect } from "react";
import { DeskNotesContext } from "../Context/DeskNotesContext";
import { NotesContext } from "../Context/NotesContext";

const LOCAL_STORAGE_KEY1 = "deskNoteData";
const LOCAL_STORAGE_KEY2 = "noteData";

export default function DeskNote({ deskNote, isDesk, showAlert }) {
  const [deskNotes, setDeskNotes] = useContext(DeskNotesContext);
  const [notes, setNotes] = useContext(NotesContext);
  const [canEdit, setCanEdit] = useState(false);
  const [deskNoteTitle, setDeskNoteTitle] = useState(deskNote.title);
  const [deskNoteContent, setDeskNoteContent] = useState(deskNote.content);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(deskNotes));
  }, [deskNotes]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(notes));
  }, [notes]);

  const addToDesk = () => {
    const newNote = {
      id: deskNote.id,
      title: deskNoteTitle,
      content: deskNoteContent,
    };
    setDeskNotes([...deskNotes, newNote]);
    const newNotes = notes.filter((note) => note.id !== deskNote.id);
    setNotes(newNotes);
    showAlert();
  };

  const addToNotes = () => {
    const newNote = {
      id: deskNote.id,
      title: deskNoteTitle,
      content: deskNoteContent,
    };
    setNotes([...notes, newNote]);
    const newDesk = deskNotes.filter((note) => note.id !== deskNote.id);
    setDeskNotes(newDesk);
    showAlert();
  };

  const DeleteNote = () => {
    const newNotes = notes.filter((note) => note.id !== deskNote.id);
    setNotes(newNotes);
  };

  const DeleteDeskNote = () => {
    const newDeskNotes = deskNotes.filter((note) => note.id !== deskNote.id);
    setDeskNotes(newDeskNotes);
  };

  const UpdateDeskNote = () => {
    const newDeskNotes = deskNotes.map((note) => {
      if (note.id === deskNote.id) {
        return { id: note.id, title: deskNoteTitle, content: deskNoteContent };
      } else {
        return note;
      }
    });
    setDeskNotes(newDeskNotes);
    setCanEdit(false);
  };
  const UpdateNote = () => {
    const newNotes = notes.map((note) => {
      if (note.id === deskNote.id) {
        return { id: note.id, title: deskNoteTitle, content: deskNoteContent };
      } else {
        return note;
      }
    });
    setNotes(newNotes);
    setCanEdit(false);
  };

  const EnableEdit = () => {
    setCanEdit(true);
  };

  const DisableEdit = () => {
    isDesk ? UpdateDeskNote() : UpdateNote();
  };

  return (
    <>
      <div
        className={
          canEdit
            ? "deskNote rounded p-3 d-flex flex-column justify-content-start canEdit col-10 col-lg-4"
            : "deskNote rounded p-3 d-flex flex-column justify-content-start cannotEdit col-10 col-lg-4"
        }
      >
        {canEdit ? (
          <input
            className="note-title mb-3 note-title-edit p-0"
            type="text"
            value={deskNoteTitle}
            onChange={(e) => setDeskNoteTitle(e.target.value)}
          />
        ) : (
          <p className="text-center mb-3 note-title">{deskNoteTitle}</p>
        )}

        <div className="d-flex justify-content-center align-items-start note-preview-text-container-container rounded p-2">
          {canEdit ? (
            <textarea
              className="w-100 note-preview-text-container text-center p-0"
              id="textArea"
              style={{
                resize: "none",
              }}
              value={deskNoteContent}
              rows={7}
              onChange={(e) => setDeskNoteContent(e.target.value)}
            ></textarea>
          ) : (
            <div className="note-preview-text-container">
              <span>
                <p className="note-preview-text">
                  {deskNote.content ? deskNote.content : "empty"}
                </p>
              </span>
            </div>
          )}
        </div>
        <span className="d-flex justify-content-between w-100 ">
          <button
            className="btn btn-danger note-btn d-flex justify-content-center align-items-center mt-4 text-dark "
            onClick={isDesk ? () => DeleteDeskNote() : () => DeleteNote()}
          >
            <i className="bi bi-trash3-fill text-light fs-2"></i>
          </button>

          {isDesk ? (
            <button
              className="btn btn-primary note-btn d-flex justify-content-center align-items-center mt-4"
              onClick={() => addToNotes()}
            >
              <i className="bi bi-journal-arrow-up fs-2 text-light"></i>
            </button>
          ) : (
            <button
              className="btn btn-primary note-btn d-flex justify-content-center align-items-center mt-4"
              onClick={() => addToDesk()}
            >
              <i className="bi bi-journal-arrow-down fs-2 text-light"></i>
            </button>
          )}
          {canEdit ? (
            <button
              className="btn btn-success note-btn d-flex justify-content-center align-items-center mt-4 text-dark"
              onClick={() => DisableEdit()}
            >
              <i className="bi bi-check-lg fs-2 text-light"></i>
            </button>
          ) : (
            <button
              className="btn btn-secondary note-btn d-flex justify-content-center align-items-center mt-4 text-dark"
              onClick={() => EnableEdit()}
            >
              <i className="bi bi-pencil-fill text-light fs-2"></i>
            </button>
          )}
        </span>
      </div>
    </>
  );
}
