import '../App.css';
import React, { useState } from "react";


function NewTripForm( {trips, setTrips} ) {
  const [title, setTitle] = useState("")
  const [tripDescription, setTripDescription] = useState("")
  const [year, setYear] = useState(null)

  const handleNewTrip = (newTrip) => {
    setTrips([...trips, newTrip])
  }

  const handleTripSubmit = (event) => {
    event.preventDefault()
    fetch("/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        trip_description: tripDescription,
        year: year,
      }),
    })
    .then(r => r.json())
    .then(newTrip => {
      handleNewTrip(newTrip)
      setTitle("")
      setTripDescription("")
      event.target.reset()
    })
  }

  const yearList = () => {
    const years = []
    const currentYear = new Date().getFullYear()
    const earliestYear = 1990
    while ( earliestYear <= currentYear ) {
      years.push(earliestYear++)
    }
    return years
  }

  const yearOptions = yearList.map((year) => {
      return <option value={year.toString()}>{year}</option>
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