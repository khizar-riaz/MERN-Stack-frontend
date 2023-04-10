import React, { useState } from "react";

const SignUp = () => {
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const collectData = ()=>{
console.warn(name,email,password);
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
       className="inputBox" 
       type="text" 
       value={email}
        onChange={(e) => SetEmail(e.target.value)}
       placeholder="Enter email" 
       />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
