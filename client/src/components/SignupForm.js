import '../App.css';
import React, { useState } from "react";


function Signup( {onLogin} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [residence, setResidence] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        residence: residence,
        bio,
      }),
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
      <form onSubmit={handleSubmit}>

        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <label>Residence</label>
        <input
          type="text"
          id="residence"
          value={residence}
          onChange={(e) => setResidence(e.target.value)}
        />

        <label>Bio</label>
        <textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
    </form>
    </div>
  );
}

export default Signup;