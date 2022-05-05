import '../App.css';
import React from "react";



function TripCard( {trip} ) {
  const {title, trip_description, year} = trip

  return (
    <div className="trip-card">
      <ul className='ul'>
        <li>Title: {title}</li>
        <li>Description: {trip_description}</li>
        <li>Year: {year}</li>
      </ul>
    </div>
  );
}

export default TripCard;