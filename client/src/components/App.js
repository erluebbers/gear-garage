import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login"
import Homepage from "./Homepage"
import NavBar from "./NavBar"
import GearHome from "./GearHome"
import TripHome from "./TripHome"

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

  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (
    <div>
      <NavBar user={user} handleLogoutClick={handleLogoutClick}/>
      <Switch>
        <Route exact path="/">
          {user ? (
            <Homepage user={user} />
              ) : (
            <Login onLogin={setUser}/>
          )}
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/gear">
          <GearHome />
        </Route>
        <Route path="/trips">
          <TripHome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
