import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./features/Login/Login"
import Landingpage from "./features/Home/Landingpage"
import NavBar from "./features/Home/NavBar"
import GearHome from "./features/Gear/GearHome"
import TripHome from "./features/Trips/TripHome"

function App() {
  const [user, setUser] = useState(null)
  const [gear, setGear] = useState([])
  const [tripList, setTripList] = useState([])

  
  //Auto-Login and fetch if there is a user session active
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setGear(user.items)
          setTripList(user.trips)
        });
      }
    });
  }, []);

  //log a user out
  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    <Redirect to="/home"/>
  }

  //Delete an item
  const handleDelete = (id) => {
    fetch(`/users/${user.id}/items/${id}`,{
      method: 'DELETE'
    })
    .then(() => onDelete(id))
  }

  //update Gear List after deleting item
  const onDelete = (deletedId) => {
    const updatedItems = gear.filter((item) => deletedId !== item.id)
    setGear(updatedItems)
  }

  //update Item condition
  const handleUpdate = (item, newCondition) => {
    fetch(`/users/${user.id}/items/${item.id}`, {
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

  if (!user) return <Login setUser={setUser} setTripList={setTripList} user={user} setGear={setGear}/>;

  return (
    <div>
      <NavBar user={user} handleLogoutClick={handleLogoutClick}/>
      <Switch>
        <Route exact path="/">
          <Landingpage user={user} />
        </Route>
        <Route exact path="/home">
          <Landingpage user={user} />
        </Route>
        <Route exact path="/gear">
          <GearHome 
            gear={gear} 
            setGear={setGear} 
            user={user} 
            handleDelete={handleDelete} 
            handleUpdate={handleUpdate}
            tripList={tripList}
          />
        </Route>
        <Route exact path="/trips">
          <TripHome 
            tripList={tripList}
            setTripList={setTripList}
            user={user}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
