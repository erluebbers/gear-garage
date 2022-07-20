import '../App.css';
import React from "react";



function TripCard( {trip} ) {
  const {title, trip_description, year, items} = trip

  const associatedItems = items.map(item => {
    return <li key={item.id}>{item.name}</li>
  })

  return (
    <div className="trip-card">
      <ul className='ul'>
        <li>Title: {title}</li>
        <li>Description: {trip_description}</li>
        <li>Year: {year}</li>
        <br />
        <li>Items for this Trip:</li>
        {items.length === 0 ? <li>No items yet!</li> : associatedItems}
      </ul>
    </div>
  );
}

export default TripCard;