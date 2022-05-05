import '../App.css';
import React from "react";
import NewGearForm from './NewGearForm';
import GearList from './GearList';


function GearHome( { gear, setGear, handleDelete, handleUpdate, tripList, user } ) {




  return (
    <div>
      <NewGearForm 
        gear={gear} 
        setGear={setGear}
        user={user}
      />
      <GearList 
        gear={gear} 
        setGear={setGear} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
        tripList={tripList}
        user={user}
      />
    </div>
  );
}

export default GearHome;