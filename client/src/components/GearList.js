import '../App.css';
import React from "react";
import GearCard from './GearCard';


function GearList( {gear} ) {

  const list = gear.map(item => {
    return <GearCard item={item} key={item.id}/>
  })


  return (
    <div>
      {list}
    </div>
  );
}

export default GearList;