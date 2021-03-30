import React, { useState } from "react";

function Login() {
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
    console.log(loginEmail);
    console.log(loginPass);
    const getEmail = localStorage.getItem("userEmail");
    const getPassword = localStorage.getItem("userPassword");

    if (loginEmail === getEmail && loginPass === getPassword) {
      alert("Login Successfully");
    } else {
      alert("Incorrcet");
    }
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
      </div>
    </div>
  );
}
export default Login;
