import React, { useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import CreateNoteModal from "../Components/CreateNoteModal";
import { NotesContext } from "../Context/NotesContext";
import DeskNote from "../Components/DeskNote";

const LOCAL_STORAGE_KEY = "noteData";

export default function Notes() {
  const [notes, setNotes] = useContext(NotesContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storage) {
      setNotes(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const ShowAlert = () => {
    setShow(true);
    setTimeout(() => setShow(false), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center mt-5">
        {notes.length === 0 ? <h3 className="my-5">No notes yet...</h3> : null}
        {notes.map((note) => (
          <DeskNote
            deskNote={note}
            isDesk={false}
            key={note.id}
            showAlert={ShowAlert}
          />
        ))}
      </div>
      <div className="w-25 mx-auto">
        <Alert
          show={show}
          onClose={() => setShow(false)}
          variant="success"
          className="text-center h-100 w-100 mx-auto"
        >
          <p>Sent to desk!</p>
        </Alert>
      </div>
    </>
  );
}
