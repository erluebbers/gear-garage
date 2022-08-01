import './Trip.css';
import React from "react";
import NewTripForm from "./NewTripForm";
import TripList from "./TripList"


function TripHome( {tripList, setTripList, user} ) {

    //Delete a trip
    const handleDeleteTrip = (id) => {
    fetch(`/users/${user.id}/trips/${id}`,{
      method: 'DELETE'
    })
    .then(() => onDeleteTrip(id))
  }

  //update Trip List after deleting trip
  const onDeleteTrip = (id) => {
    const updatedTrips = tripList.filter((trip) => id !== trip.id)
    setGear(updatedItems)
  }

  return (
    <div>
      <NewTripForm 
        tripList={tripList}
        setTripList={setTripList}
        user={user}
      />
      <TripList 
        tripList={tripList}
        handleDeleteTrip={handleDeleteTrip}
        user={user}
      />
    </div>
  );
}

export default TripHome;