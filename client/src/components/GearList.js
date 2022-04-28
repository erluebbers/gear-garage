import '../App.css';
import React from "react";
import GearCard from './GearCard';


function GearList( {gear, handleDelete, handleUpdate} ) {

  const gearList = gear.map(item => {
    return <GearCard item={item} key={item.id} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
  })


  return (
    <div>
      {gearList}
    </div>
  );
}

export default GearList;