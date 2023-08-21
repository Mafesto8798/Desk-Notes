import React, { useState } from "react";
import Desk from "./Screens/Desk";
import Notes from "./Screens/Notes";
import PricingCalculator from "./Screens/PricingCalculator";
import { DeskNotesContext } from "./Context/DeskNotesContext";
import { NotesContext } from "./Context/NotesContext";
import { CurrentNoteContext } from "./Context/CurrentNoteContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const mockNotes = [
    {
      id: uuidv4(),
      title: "The dog who could",
      content: "La la oomphie!!",
      priority: 1,
    },
    {
      id: uuidv4(),
      title:
        "The cat who couldn't have another fish to go in the stream gently down the river.",
      content: "Phu Phu Macka!!",
      priority: 3,
    },
    {
      id: uuidv4(),
      title: "Chinaa",
      priority: 2,
    },
    {
      id: uuidv4(),
      title: "Chinaa",
      priority: 1,
    },
    {
      id: uuidv4(),
      title: "Chinaa",
    },
    {
      id: uuidv4(),
      title: "Chinaa",
    },
  ];
  const [deskNotes, setDeskNotes] = useState([
    // {
    //   id: uuidv4(),
    //   title: "Chores",
    //   content:
    //     "1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.1.Clean the office.",
    //   priority: 1,
    // },
  ]);
  const [notes, setNotes] = useState([
    // {
    //   id: uuidv4(),
    //   title: "Groceries",
    //   content: "Chicken Salad",
    //   priority: 1,
    // },
  ]);
  const [currentNote, setCurrentNote] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Desk />,
    },
    {
      path: "/pricing",
      element: <PricingCalculator />,
    },
    {
      path: "/notes",
      element: <Notes />,
    },
  ]);

  return (
    <>
      <CurrentNoteContext.Provider value={[currentNote, setCurrentNote]}>
        <NotesContext.Provider value={[notes, setNotes]}>
          <DeskNotesContext.Provider value={[deskNotes, setDeskNotes]}>
            <RouterProvider router={router} />
          </DeskNotesContext.Provider>
        </NotesContext.Provider>
      </CurrentNoteContext.Provider>
    </>
  );
}
