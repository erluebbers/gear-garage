import '../App.css';
import React from "react";


function GearCard( {item, handleDelete} ) {
  const {id, name, description, condition} = item




  return (
    <div className="gear-card">
      <ul>
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Condition: {condition}</li>
        <button onClick={() => handleDelete(id)}>Delete Item</button>
      </ul>
    </div>
  );
}

export default GearCard;