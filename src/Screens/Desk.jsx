import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import DeskNote from "../Components/DeskNote";
import { DeskNotesContext } from "../Context/DeskNotesContext";

const LOCAL_STORAGE_KEY1 = "deskNoteData";

export default function Desk() {
  const [deskNotes, setDeskNotes] = useContext(DeskNotesContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1));
    if (storage) {
      setDeskNotes(storage);
    }
  }, []);

  const ShowAlert = () => {
    setShow(true);
    setTimeout(() => setShow(false), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="bg-main">
        <h2 className="pt-5 text-center">Desk</h2>
        <div className="d-flex flex-wrap justify-content-center my-5">
          {deskNotes.length === 0 ? (
            <h3 className="my-5">No desk notes yet...</h3>
          ) : null}
          {deskNotes.map((note) => (
            <DeskNote
              deskNote={note}
              isDesk={true}
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
            <p>Sent to notes!</p>
          </Alert>
        </div>
      </div>
    </>
  );
}
