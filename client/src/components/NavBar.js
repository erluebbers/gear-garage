import '../App.css';
import React from "react";


function NavBar({ user, setUser, onChangePage }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <h2>Gear Garage</h2> <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default NavBar;