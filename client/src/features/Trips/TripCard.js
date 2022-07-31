import './Trip.css';
import React from "react";



function TripCard( {trip, user} ) {
  const {title, trip_description, year, items, id} = trip


  const associatedItems = items.map(item => {
    return <li key={item.id}>{item.name}</li>
  })

    //Delete a trip
    const handleDeleteTrip = (id) => {
      fetch(`/users/${user.id}/trips/${id}`,{
        method: 'DELETE'
      })
      .then(() => onDeleteTrip(id))
    }
  
    //update Trip List after deleting trip
    const onDeleteTrip = (deletedId) => {
      const updatedItems = gear.filter((item) => deletedId !== item.id)
      setGear(updatedItems)
    }




  return (
    <div className="trip-card">
      <ul className='ul'>
        <li>Title: {title}</li>
        <li>Description: {trip_description}</li>
        <li>Year: {year}</li>
        <br />
        <li>Items assigned to this Trip:</li>
        {items.length === 0 ? <li>No items yet!</li> : associatedItems}
      </ul>
      <button onClick={() => handleDeleteTrip(id)}>Delete Trip</button>
    </div>
  );
}

export default TripCard;