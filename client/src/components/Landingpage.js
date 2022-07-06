import '../App.css';
import React from "react";


function Landingpage( {user} ) {
  const { username, bio, residence } = user;


  return (
    <div className='landing-page'>
      <h2>Hello, {username}, welcome to your own personal Gear Garage!</h2>
      <h3>Home: {residence}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default Landingpage;