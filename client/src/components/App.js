import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginHome from "./LoginHome"
import ProfileHome from "./ProfileHome"
import NavBar from "./NavBar"

function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")

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
      <NavBar user={user} setUser={setUser} onChangePage={setPage}/>
      <Switch>
        <Route path="/">
          {user ? (
            <ProfileHome />
              ) : (
            <LoginHome onLogin={setUser}/>
          )}
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
