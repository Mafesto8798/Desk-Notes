import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateNoteModal from "./CreateNoteModal";
import DeskLogo from "../Media/DeskNotes.png";

export default function Navbar({ active }) {
  return (
    <>
      <CreateNoteModal />
      <nav className="navbar navbar-expand-lg navbar-light nav-bg p-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <div className="d-flex justify-content-evenly align-items-center w-100">
              <a className="navbar-brand" href="#">
                <h3 id="logo">DeskNotes</h3>
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link
                    className={
                      active === "desk"
                        ? "nav-link  nav-link-selected mx-3"
                        : "nav-link  mx-3"
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
                        ? "nav-link  nav-link-selected mx-3"
                        : "nav-link  mx-3"
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
                        ? "nav-link  nav-link-selected mx-3"
                        : "nav-link  mx-3"
                    }
                    to={"/notes"}
                  >
                    Notes
                  </Link>
                </li>
                {/* One up games */}
                {/* <li className="nav-item">
                  <Link
                    className={
                      active === "notes"
                        ? "nav-link  nav-link-selected mx-3"
                        : "nav-link  mx-3"
                    }
                    to={"/oneup"}
                  >
                    OneUpGamesTest
                  </Link>
                </li> */}
                {/* One up games */}
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
          </div>
        </div>
      </nav>
    </>
  );
}
