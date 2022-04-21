import '../App.css';
import React from "react";
import NewGearForm from './NewGearForm';
import GearList from './GearList';


function GearHome( { gear, setGear } ) {



  return (
    <div>
      <NewGearForm />
      <GearList gear={gear}/>
    </div>
  );
}

export default GearHome;