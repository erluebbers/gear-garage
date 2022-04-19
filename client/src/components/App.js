import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginHome from "./LoginHome"
import ProfileHome from "./ProfileHome"

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
        <LoginHome onLogin={setUser}/>
          ) : (
        <ProfileHome />
      )}
    </div>
  );
}

export default App;
