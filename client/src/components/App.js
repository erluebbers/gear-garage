import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login"

// import { Switch, Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null)

  //Auto-Login if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div>
      <h1>Gear Garage: Organizing for Adventure and Outdoor travel</h1>
      {!user ? (
        <Login />
          ) : (
        <ProfileHome />
      )}
    </div>
  );
}

export default App;
