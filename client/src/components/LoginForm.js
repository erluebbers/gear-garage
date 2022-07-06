import '../App.css';
import React, { useState } from "react";


function LoginForm( {setUser, setGear, setTripList} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setGear(user.items)
          setTripList(user.trips)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }


  return (
    <div className='form-container'>
      <h3>Log in and start planning your next adventure</h3>
      <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> <br />
          <button className='button' type="submit">Login</button>
      </form>
      {errors}
    </div>
  );
}

export default LoginForm;