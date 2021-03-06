import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";

function Signup() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValue = (e) => {
    const inp = e.target.value;
    setEmail(inp);
  };

  const passwordValue = (e) => {
    const inp = e.target.value;
    setPassword(inp);
  };

  const singup = () => {
    // console.log(email)
    // console.log(password)
    if (email === "" && password === "") {
      alert("Enter Values");
    } else {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      history.push("/");
    }
  };

  return (
    // Main Div Start
    <div id="main-Div">
      <div id="signup-Div">
        <h1 id="heading"> Sign-Up </h1>
        <input id="full-name-input" type="text" placeholder="Full Name :" />
        <input
          onChange={emailValue}
          id="email-input"
          type="email"
          placeholder="Email :"
        />
        <input
          onChange={passwordValue}
          id="password-input"
          type="password"
          placeholder="New Password :"
        />
        <input
          id="confirm-password"
          type="password"
          placeholder="Confirm Password :"
        />
      </div>

      <div id="button-Div">
        <button onClick={singup} id="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default Signup;
