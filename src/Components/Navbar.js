import React from "react";
import { Link } from "react-router-dom";
import CreateNoteModal from "./CreateNoteModal";
import DeskLogo from "../Media/DeskNotes.png";

export default function Navbar({ active }) {
  return (
    <>
      <CreateNoteModal />
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-around"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand" href="#">
            <h3 id="logo">DeskNotes</h3>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link
                className={
                  active === "desk"
                    ? "nav-link fw-bold nav-link-selected mx-3"
                    : "nav-link fw-bold mx-3"
                }
                to={"/"}
              >
                Desk
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  active === "pricing"
                    ? "nav-link fw-bold nav-link-selected mx-3"
                    : "nav-link fw-bold mx-3"
                }
                to={"/pricing"}
              >
                Pricing Calulator
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  active === "notes"
                    ? "nav-link fw-bold nav-link-selected mx-3"
                    : "nav-link fw-bold mx-3"
                }
                to={"/notes"}
              >
                Notes
              </Link>
            </li>
            <button
              className="btn btn-primary create-note my-2 my-sm-0 d-flex justify-content-evenly align-items-center fs-5 text-light "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createNoteModal"
            >
              <i className="bi bi-journal-plus fs-5 text-light"></i>
              Create
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
