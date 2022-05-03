import '../App.css';
import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"


function TripHome( {tripList, setTripList} ) {


  return (
    <div>
      <NewTripForm 
        tripList={tripList}
        setTripList={setTripList}
      />
      <TripList 
        tripList={tripList}
        setTripList={setTripList}
      />
    </div>
  );
}

export default TripHome;