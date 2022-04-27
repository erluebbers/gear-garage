import '../App.css';
import React from "react";
import NewGearForm from './NewGearForm';
import GearList from './GearList';


function GearHome( { gear, setGear, handleDelete, handleUpdate } ) {




  return (
    <div>
      <NewGearForm gear={gear} setGear={setGear}/>
      <GearList 
        gear={gear} 
        setGear={setGear} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default GearHome;