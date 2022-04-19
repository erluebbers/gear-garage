import '../App.css';
import React, { useState } from "react";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function LoginHome( {onLogin} ) {
  const [existingUser, setExistingUser] = useState(true)

  return (
    <div>
      {existingUser ? <LoginForm onLogin={onLogin} /> : <SignupForm onLogin={onLogin}/>}
    </div>
  );
}

export default LoginHome;