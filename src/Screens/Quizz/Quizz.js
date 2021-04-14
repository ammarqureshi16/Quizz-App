import React, { useState } from "react";

function Quizz() {
  const [data, setData] = useState([]);

  const getDta = () => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data.results));
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
      {/* {data.map( (item) => {
        console.log(item);
        return (
          <div>
            <div>
              <h4>{item.question}</h4>

              {item.incorrect_answers.map( (item) => {
                // console.log("-------->>>>>>"+item)
                return(
                  <div>
                    <input type="radio" value={item} name="gender" />
                    <label> {item.incorrect_answers} </label>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })} */}

{data.map( (item) => {
        console.log(item);
        return (
          <div>
            <div>
              <h4> {item.question} </h4>
                <input type="radio" value={item} name="option" />
                <label> {item.correct_answer} </label>
              
              {item.incorrect_answers.map( (ab) => {
                // console.log("-------->>>>>>"+ab)
                return(
                  <div>
                    <input type="radio" value={item} name="option" />
                    <label> {ab} </label>
                    <label>{item.incorrect_answer}</label>
                  
                  </div>
                )
              })}

            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Quizz;
