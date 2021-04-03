import React, { useState } from "react";
import Image from "./Asset/Imag/imag.jpg";

function Quizz() {
//   const [data, setData] = useState([]);
//   const getDta = () => {
//     fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   };
//   console.log("--->>", data);
  return (
    <div>
      <div id="heading-div">
        <h3>QUIZ CATEGORIES</h3>
      </div>
      {/* <div style={{width:"20%",border:"1px solid red",justifyContent:"center"}}>
            </div> */}

      <div id="card-div">
        <div id="button-div">
          <button className="js-button">
            Html
          </button>
          {/* {data.map((item) => {
            return (
              <p>
                {item.results.question}
              </p>
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
