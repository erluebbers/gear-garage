import '../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function Login( {setUser, setTripList, user, setGear} ) {
  const [existingUser, setExistingUser] = useState(true)
  const [errors, setErrors] = useState([])

  const setUserValue = () => {
    setExistingUser(!existingUser)
  }

  const handleDemo = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "demo", password: "demo" }),
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
    <div className='login'>
      <h1>Gear Garage: Organizing for Adventure and Outdoor travel</h1> 
      <button className='demo-button' onClick={handleDemo}>DEMO THIS SITE</button>
        {existingUser ? 
          <LoginForm 
            setUser={setUser} 
            setTripList={setTripList} 
            user={user} 
            setGear={setGear}
          /> :
          <SignupForm setUser={setUser}/>}
      <div className='no-account'>
        <label htmlFor="signup">{existingUser ? "Don't have an account? Sign up Here" : null}</label>
        <button className='button' onClick={setUserValue} id="signup"> {existingUser ? "Create an account" : "Back to Login"}</button>
      </div>
      {errors}
    </div>
  );
}

export default Login;