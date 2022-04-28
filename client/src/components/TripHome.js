import '../App.css';
import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"


function TripHome( {trips, setTrips} ) {



  return (
    <div>
      <NewTripForm 
        trips={trips}
        setTrips={setTrips}
      />
      <TripList 
        trips={trips}
        setTrips={setTrips}
      />
    </div>
  );
}

export default TripHome;