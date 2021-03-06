import './Trip.css';
import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"


function TripHome( {tripList, setTripList, user} ) {


  return (
    <div>
      <NewTripForm 
        tripList={tripList}
        setTripList={setTripList}
        user={user}
      />
      <TripList 
        tripList={tripList}
      />
    </div>
  );
}

export default TripHome;