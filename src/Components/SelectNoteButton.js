import React from "react";

export default function SelectNoteButton({ note }) {
  return (
    <>
      <button className="btn btn-success">{note.title}</button>
    </>
  );
}
