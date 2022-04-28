import '../App.css';
import React from "react";



function TripCard( {trip} ) {
  const {title, trip_description, year} = trip

  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{trip_description}</li>
        <li>{year}</li>
      </ul>
    </div>
  );
}

export default TripCard;