import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Quizz() {
  let history = useHistory();
 
  const get = () => {
    history.push("/test");
  };
  // const [data, setData] = useState([]);
  // const getDta = () => {
  //   fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   };
    // console.log("--->>Data", data) 
  return (
    <div>
      <div id="heading-div">
        <h3>QUIZ CATEGORIES</h3>
      </div>
      {/* <div style={{width:"20%",border:"1px solid red",justifyContent:"center"}}>
            </div> */}

      <div id="card-div">
        <div id="button-div">
          <button onClick={get} className="js-button">
            Html
          </button>
          {/* {data.map((item) => {
          console.log(item.results.question)
            return (
              <div>
                <h1>
                  {item.results.question}
                </h1>
                <input typ="radio" name="gender" value="{}"/>
                </div>
            );
          })} */}
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
