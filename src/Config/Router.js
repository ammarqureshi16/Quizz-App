import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Screens/Login/Login";
import Signup from "../Screens/Signup/Signup";
import Quizz from "../Screens/Quizz/Quizz";
import Test from "../Screens/Test";

export default function Reactrouter() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/quizz">
            <Quizz />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* <Route path="/test">
            <Test />
          </Route> */}
          
        </Switch>
      </div>
    </Router>
  );
}
