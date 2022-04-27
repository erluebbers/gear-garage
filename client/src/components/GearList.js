import '../App.css';
import React from "react";
import GearCard from './GearCard';


function GearList( {gear, handleDelete, handleUpdate} ) {

  const list = gear.map(item => {
    return <GearCard item={item} key={item.id} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
  })


  return (
    <div>
      {list}
    </div>
  );
}

export default GearList;