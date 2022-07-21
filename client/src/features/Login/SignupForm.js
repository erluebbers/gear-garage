import './Login.css';
import React, { useState } from "react";


function Signup( {setUser} ) {
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
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    e.target.reset()
    setErrors([])
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='signup'>

        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br />

        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />

        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> <br />

        <label>Residence</label>
        <input
          type="text"
          id="residence"
          value={residence}
          onChange={(e) => setResidence(e.target.value)}
        /> <br />

        <label>Bio</label>
        <textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        /> <br />

        <button type="submit">Sign Up and Log in</button>

        {errors}
    </form>
    </div>
  );
}

export default Signup;