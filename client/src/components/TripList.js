import '../App.css';
import React from "react";
import TripCard from "./TripCard"



function TripList( {trips, setTrips} ) {

  const tripList = trips.map((trip) => {
    return <TripCard trip={trip} key={trip.id}/>
  })


  return (
    <div>
      {tripList}
    </div>
  );
}

export default TripList;