import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Quizz() {
  let history = useHistory();

  const getDta = () => {
    history.push("/test")
    
  };
  return (
    <div>
      <div id="heading-div">
        <h3>QUIZ CATEGORIES</h3>
      </div>
      {/* <div style={{width:"20%",border:"1px solid red",justifyContent:"center"}}>
            </div> */}

      <div id="card-div">
        <div id="button-div">
          <button onClick={getDta} className="js-button">
            Html
          </button>
          <button className="css-button">Css</button>
          <br />
          <button className="js-button">Javascript</button>
          <button className="css-button">React</button>
          <br />
          <button className="js-button">React Native</button>
          <button className="css-button">C++</button>
        </div>
      </div>


    </div>
  );
}
export default Quizz;
