import '../App.css';
import React, { useState } from "react";
import TripCard from "./TripCard"



function TripList( {tripList} ) {
  const [orderedTrips, setOrderedTrips] = useState(tripList)

  const tripDisplay = orderedTrips.map((trip) => {
    return <TripCard trip={trip} key={trip.id}/>
  })

  const orderedTripList = () => {
    fetch("/sorted_trips")
      .then(r => r.json())
      .then(trips => setOrderedTrips(trips))
  }


  return (
    <div>
      <button onClick={orderedTripList}>Order Trips</button>
      {tripDisplay}
    </div>
  );
}

export default TripList;