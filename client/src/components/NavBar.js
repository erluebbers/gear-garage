import '../App.css';
import React from "react";
import { Link } from "react-router-dom"


function NavBar({ user, handleLogoutClick}) {


  if (user) {
    return (
    <div>
      <h2 className='heading' >Gear Garage</h2> <button onClick={handleLogoutClick} className='button' >Logout</button>
      <nav className='topnav'>
        <Link to="/">Home</Link>
        <Link to="/gear">Gear</Link>
        <Link to="/trips">Trips</Link>
      </nav>
    </div>)
  } else {
    return (
    <div>
    </div>)
  }
}

export default NavBar;