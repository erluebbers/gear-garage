import '../App.css';
import React from "react";
import NewGearForm from './NewGearForm';
import GearList from './GearList';


function GearHome( { gear, setGear, handleDelete, handleUpdate, tripList } ) {




  return (
    <div>
      <NewGearForm gear={gear} setGear={setGear}/>
      <GearList 
        gear={gear} 
        setGear={setGear} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
        tripList={tripList}
      />
    </div>
  );
}

export default GearHome;