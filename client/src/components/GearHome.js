import '../App.css';
import React from "react";
import NewGearForm from './NewGearForm';
import GearList from './GearList';


function GearHome( { gear, setGear } ) {

  const handleDelete = (id) => {
    fetch(`/items/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDelete(id))
  }

  const onDelete = (deletedId) => {
    const updatedItems = gear.filter((item) => deletedId !== item.id)
    setGear(updatedItems)
  }

  return (
    <div>
      <NewGearForm gear={gear} setGear={setGear}/>
      <GearList 
        gear={gear} 
        setGear={setGear} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default GearHome;