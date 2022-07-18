import '../App.css';
import React, { useState } from "react";


function NewTripForm( {tripList, setTripList, user} ) {
  const [title, setTitle] = useState("")
  const [tripDescription, setTripDescription] = useState("")
  const [year, setYear] = useState(null)
  const [errors, setErrors] = useState([])

  const handleNewTrip = (newTrip) => {
    setTripList([...tripList, newTrip])
  }

  const handleTripSubmit = (event) => {
    event.preventDefault()
    fetch(`/users/${user.id}/trips`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        trip_description: tripDescription,
        year: year,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newTrip) => {
          handleNewTrip(newTrip)
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
    setTitle("")
    setTripDescription("")
    event.target.reset()
    setErrors([])
  }

  function yearList() {
    let years = []
    let currentYear = new Date().getFullYear()
    let earliestYear = 1990
    while ( currentYear >= earliestYear ) {
      years.push(currentYear--)
    }
    years.unshift("Select Year")
    return years
  }

  const yearOptions = yearList().map((year) => {
      return <option key={year} value={year}>{year}</option>
    })

  return (
    <div>
      <h3>Have an upcoming Trip? Add it here:</h3>
      <form onSubmit={handleTripSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter trip title..."
        >
        </input>
        <label htmlFor="trip-description">Trip Description</label>
        <input
          type="text"
          id="trip-description"
          value={tripDescription}
          onChange={(e) => setTripDescription(e.target.value)}
          placeholder="Enter trip description..."
        >
        </input>
        <label htmlFor="year">Year</label>
        <select onChange={(e) => setYear(e.target.value)} name="year" id="year">{yearOptions}</select>
        <button type="submit">Submit</button>      
      </form>
    </div>
  );
}

export default NewTripForm;