import './Home.css';
import React from "react";
import { Link } from "react-router-dom"


function NavBar({ user, handleLogoutClick}) {


  if (user) {
    return (
    <div className='navbar'>
      <h1>Gear Garage</h1> 
      <nav className='topnav'>
        <Link to="/home">Home</Link>
        <Link to="/gear">Gear</Link>
        <Link to="/trips">Trips</Link>
      </nav>
      <button onClick={handleLogoutClick} className='logout-button' >Logout</button> 
    </div>)
  } else {
    return (
    <div>
    </div>)
  }
}

export default NavBar;