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
  const [gear, setGear] = useState([])
  const [trips, setTrips] = useState([])

  //Auto-Login if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //fetch Gear
  useEffect(() => {
    fetch("/items")
      .then(r => r.json())
      .then(data => setGear(data))
  }, [])

  //fetch trips
  useEffect(() => {
    fetch("/trips")
      .then(r => r.json())
      .then(data => setTrips(data))
  }, [])


  //log a user out
  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  //Delete an item
  const handleDelete = (id) => {
    fetch(`/items/${id}`,{
      method: 'DELETE'
    })
    .then(() => onDelete(id))
  }

  //update state after deleting item
  const onDelete = (deletedId) => {
    const updatedItems = gear.filter((item) => deletedId !== item.id)
    setGear(updatedItems)
  }

  //update Item condition
  const handleUpdate = (item, newCondition) => {
    fetch(`/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        condition: newCondition,
        name: item.name,
        description: item.description,
      })
    })
    .then(r => r.json())
    .then((updatedItem) => onUpdate(updatedItem))
  }

  //update state after updating item condition
  const onUpdate = (updatedItem) => {
    const updatedGear = gear.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem
      } else {
        return item
      }
    })
    setGear(updatedGear)
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
          <GearHome 
            gear={gear} 
            setGear={setGear} 
            user={user} 
            handleDelete={handleDelete} 
            handleUpdate={handleUpdate}
            />
        </Route>
        <Route path="/trips">
          <TripHome 
            trips={trips}
            setTrips={setTrips}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
