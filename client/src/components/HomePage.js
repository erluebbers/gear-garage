import '../App.css';
import React from "react";
import { useRouteMatch } from 'react-router-dom';


function Homepage( {user} ) {
  const { username, bio, residence } = user;


  return (
    <div>
      <h2>Hello, {username}, welcome to your own personal Gear Garage!</h2>
      <h3>Home: {residence}</h3>
      <p>{bio}</p>
    </div>
  );
}

export default Homepage;