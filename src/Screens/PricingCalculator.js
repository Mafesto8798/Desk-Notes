import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Navbar from "../Components/Navbar";

export default function PricingCalculator() {
  const [gigs, setGigs] = useState([
    {
      gigName: "Web Development",
      rate: 20,
    },
    {
      gigName: "Game Development",
      rate: 35,
    },
    {
      gigName: "3D Modeling",
      rate: 10,
    },
  ]);
  const [show, setShow] = useState(false);

  const [gigHours, setGigHours] = useState(0);
  const [gigPrice, setGigPrice] = useState("$");
  const [currentGigRate, setCurrentGigRate] = useState(0);

  const [newGigName, setNewGigName] = useState("");
  const [newGigRate, setNewGigRate] = useState(0);

  const CalculateGigPrice = () => {
    if (currentGigRate !== 0) {
      const priceQuote = currentGigRate * gigHours;
      setGigPrice(`$ ${priceQuote}`);
    } else {
      setGigPrice("$");
    }
  };

  const AddNewGig = () => {
    if (newGigName !== "" && newGigRate > 0) {
      const newGig = {
        gigName: newGigName,
        rate: newGigRate,
      };
      setGigs([...gigs, newGig]);
    } else {
      return;
    }
    setShow(true);
    setTimeout(() => setShow(false), 1500);
    setNewGigName("");
    setNewGigRate(0);
  };

  return (
    <>
      <Navbar />
      <div className="my-5 d-flex flex-column">
        <h2 className="text-center mb-5">
          Create Gigs and Caluclate Pricing
        </h2>
        <div className="w-100 d-flex flex-column flex-lg-row  justify-content-evenly align-items-center  mx-auto">
          {/* CREATE A NEW GIG */}
          <div className="d-flex flex-column align-items-start justify-content-center p-4 inner-shadow my-4">
            <h4 className="my-3 text-nowrap">Create a New Gig</h4>
            <label className="my-2 fw-bold">Gig Name</label>
            <input
              type="text"
              placeholder="My New Gig..."
              className="form-control mb-4"
              value={newGigName}
              onChange={(e) => setNewGigName(e.target.value)}
            />
            <label className="my-2 fw-bold">Hourly Rate</label>
            <input
              type="number"
              placeholder="$"
              className="form-control mb-4"
              value={newGigRate}
              onChange={(e) => setNewGigRate(e.target.value)}
            />
            <button
              className="btn btn-secondary w-50 text-light"
              onClick={() => AddNewGig()}
            >
              Add Gig
            </button>
          </div>
          {/* CALCULATE GIG PRICE */}
          <div className="d-flex flex-column align-items-start justify-content-center p-4 inner-shadow my-4">
            <h4 className="my-3 text-nowrap">Calculate Price</h4>
            <label className="my-2 fw-bold">Gig</label>
            <select
              className="form-select mb-4"
              aria-label="Default select"
              onChange={(e) => {
                setCurrentGigRate(e.target.value);
              }}
            >
              <option defaultValue={null} value={0}>
                Select A Gig...
              </option>
              {gigs.map((gig) => (
                <option value={gig.rate} key={gig.gigName}>
                  {`${gig.gigName} - $${gig.rate}`}
                </option>
              ))}
            </select>
            <label className="my-2 fw-bold">Hours</label>
            <input
              type="number"
              className="form-control mb-4"
              value={gigHours}
              onChange={(e) => setGigHours(e.target.value)}
            />
            <button
              className="btn btn-secondary w-50 text-light"
              onClick={() => CalculateGigPrice()}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <span className="d-flex justify-content-center flex-column align-items-center pb-3">
        <h3>Gig Price:</h3>
        <h2 className=" my-3 fs-1 fw-bold text-success">{gigPrice}</h2>
      </span>
      <div className="w-25 mx-auto">
        <Alert
          show={show}
          onClose={() => setShow(false)}
          variant="success"
          className="text-center  h-100 w-100 mx-auto"
        >
          <p>Gig succesfully added!</p>
        </Alert>
      </div>
    </>
  );
}
