import '../App.css';
import React from "react";


function GearCard( {item} ) {
  const {name, description, condition} = item


  return (
    <div className="gear-card">
      <ul>
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Condition: {condition}</li>
      </ul>
    </div>
  );
}

export default GearCard;