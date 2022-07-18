import '../App.css';
import React, { useState } from "react";


function GearCard( {item, handleDelete, handleUpdate, tripList, user} ) {
  const {id, name, description, condition, trips} = item

  const [updatedCondition, setUpdatedCondition] = useState("")
  const [tripId, setTripId] = useState("")
  const [associatedTrips, setAssociatedTrips] = useState(tripList)

  
  const tripsDropdown = tripList.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.title} ({trip.year})</option>
  })

  const tripListItems = associatedTrips.map(trip => {
    return <li key={trip.id}>{trip.title}</li>
  })

    //add item to a trip
    const handleAddTripItem = (itemId, tripId) => {
      console.log("itemId", itemId)
      console.log("userId", user.id)
      console.log("tripId", parseInt(tripId))
      fetch(`/users/${user.id}/packlists`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trip_id: parseInt(tripId),
          item_id: itemId,
          user_id: user.id,
        }),
      })
      .then(r => r.json())
      .then((newPacklist) => onAddItem(newPacklist))
    }
  
    //update item state with new trip
    const onAddItem = (newPacklist) => {
      const addedTrip = tripList.find(trip => trip.id === newPacklist.trip_id)
      setAssociatedTrips([...associatedTrips, addedTrip])
    }

  return (
    <div className="gear-card">
      <ul className="ul">
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Condition: {condition}</li>
        <p>Trips:</p>
        <ul>
          {tripListItems}
        </ul>
        <button onClick={() => handleDelete(id)}>Delete Item</button>
          <label htmlFor="update-condition">Update Condition</label>
          <select 
            name="update-condition" 
            id="update-condition" 
            onChange={(e) => setUpdatedCondition(e.target.value)} 
            value={updatedCondition}
          >
            <option value="Condition">Condition (1-5)</option>
            <option value="1">1 (poor)</option>
            <option value="2">2 (usable)</option>
            <option value="3">3 (good)</option>
            <option value="4">4 (great)</option>
            <option value="5">5 (excellent)</option>
          </select>
          <button onClick={() => handleUpdate(item, updatedCondition)}>Update Condition</button>
          <label htmlFor="add-item">Add Item to a Trip Pack List</label>
          <select
            name="add-item"
            id="add-item"
            onChange={(e) => setTripId(e.target.value)}
          >
            <option>Select Trip</option>
            {tripsDropdown}
          </select>
          <button onClick={() => handleAddTripItem(id, tripId)}>Add to Trip</button>
      </ul>
    </div>
  );
}

export default GearCard;