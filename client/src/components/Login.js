import '../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function Login( {setUser, setTripList, user, setGear} ) {
  const [existingUser, setExistingUser] = useState(true)

  const setUserValue = () => {
    setExistingUser(!existingUser)
  }


  return (
    <div className='login'>
      <h1>Gear Garage: Organizing for Adventure and Outdoor travel</h1>
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
    </div>
  );
}

export default Login;