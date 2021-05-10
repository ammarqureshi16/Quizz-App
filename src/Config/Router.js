import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Screens/Login/Login"
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

           
          <Route exact path="/">
            <Login />
          </Route>
          
          <Route exact path="/quizz">
            <Quizz />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>


          <Route exact path="/test">
            <Test />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
