import '../App.css';
import React, { useState } from "react";


function GearCard( {item, handleDelete, handleUpdate} ) {
  const {id, name, description, condition} = item
  const [updatedCondition, setUpdatedCondition] = useState("")

  return (
    <div className="gear-card">
      <ul>
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Condition: {condition}</li>
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
      </ul>
    </div>
  );
}

export default GearCard;