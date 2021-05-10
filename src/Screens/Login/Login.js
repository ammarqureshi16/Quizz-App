import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Signup from "../Signup/Signup";

function Login() {
  let history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const email = (e) => {
    const inp = e.target.value;
    setLoginEmail(inp);
  };
  const pass = (e) => {
    const inp = e.target.value;
    setLoginPass(inp);
  };

  const login = () => {
    // console.log(loginEmail);
    // console.log(loginPass);
    const getEmail = localStorage.getItem("userEmail");
    const getPassword = localStorage.getItem("userPassword");

    if (loginEmail === getEmail && loginPass === getPassword) {
      alert("Login Successfully");
      history.push("/quizz");
    } else {
      alert("Incorrcet");
    }
  };
  const signup = () => {
    history.push("/signup");
  };

  return (
    <div id="main-Div">
      <div id="signup-Div">
        <h1 id="heading">Login</h1>
        <input id="full-name-input" type="text" placeholder="Full Name :" />
        <input
          onChange={email}
          id="email-input"
          type="email"
          placeholder="Email :"
        />
        <input
          onChange={pass}
          id="password-input"
          type="password"
          placeholder="Password :"
        />
        <button onClick={login} id="login-button">
          Login
        </button>
        <button onClick={signup} id="craete-button">
          Create New Account
        </button>
      </div>
    </div>
  );
}
export default Login;
