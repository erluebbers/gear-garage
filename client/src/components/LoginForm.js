import '../App.css';
import React, { useEffect, useState } from "react";


function LoginForm( {onLogin} ) {
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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {errors.map((err) => (
            {err}
          ))}
      </form>

    </div>
  );
}

export default LoginForm;