import "./App.css";
import { useState } from "react";
import Quizz from "./Quizz";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [signup,setSignup]=useState(true)
  const [login,setLogin]=useState(false)

  return (
    <div>
        {/* { signup ? <Signup setSignup={setSignup} setLogin={setLogin} /> : "" }
      { login ? <Login/> : "" }  */}
      <Quizz/>
    </div>
  );
}

export default App;
