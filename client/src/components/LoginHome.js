import '../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function LoginHome( {onLogin} ) {
  const [existingUser, setExistingUser] = useState(true)

  function setUser() {
    setExistingUser(!existingUser)
  }

  return (
    <div>
      <h1>Gear Garage: Organizing for Adventure and Outdoor travel</h1>
        {existingUser ? <LoginForm onLogin={onLogin} /> : <SignupForm onLogin={onLogin}/>}
      <label htmlFor="signup">{existingUser ? "Don't have an account? Sign up Here" : null}</label>
      <button onClick={setUser} id="signup"> {existingUser ? "Create an account" : "Back to Login"}</button>
    </div>
  );
}

export default LoginHome;