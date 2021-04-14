import React, { useState } from "react";

function Test() {
  const [data, setData] = useState([]);
  const get = () => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };
  return (
    <div>
      <button id="start-quiz" onClick={get}>
        Start Quizz
      </button>
      {data.map((item) => {
        console.log(item);
        return (
          <div>
            <div>
              <h4> {item.question} </h4>
              <input type="radio" value={item} name="option" />
              <label> {item.correct_answer} </label>

              {item.incorrect_answers.map((ab) => {
                // console.log("-------->>>>>>"+ab)
                return (
                  <div>
                    <input type="radio" value={item} name="option" />
                    <label> {ab} </label>
                    <label>{item.incorrect_answer}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
//   const arrObj = [
//     {
//       question1: "1: What does HTML stand for ?",
//       option1A: "Home Tool Markup Language",
//       option1B: "Hyper Text Markup Language",
//       option1C: "Hyper To Markup Language",

//       question2: "2: Choose the correct HTML element for the largest heading ?",
//       option2A: "<h4>",
//       option2B: "<h6>",
//       option2C: "<h1>",

//       question3:"3: What is the correct HTML element for inserting a line break ?",
//       option3A: "<b>",
//       option3B: "<br>",
//       option3C: "<break>",

//       question4:"4: How can you make a numbered list ?",
//       option4A: "<ol>",
//       option4B: "<ul>",
//       option4C: "<lu>",

//       question5:"5: Which HTML element defines the title of a document ?",
//       option5A: "<title>",
//       option5B: "<head>",
//       option5C: "<meta>",
//     },
//   ];
//   //   const value=(e)=>{
//   //       const inp=e.target
//   //       console.log(inp)

//   //   }
//   return (
//     <div>
//       {arrObj.map((item) => {
//         return (
//           <div>
//             <h4> {item.question1} </h4>
//             <input type="radio" value={item} name="radiovalue" />
//             <label> {item.option1A} </label>
//             <br />

//             <input type="radio" value={item} name="radiovalue" />
//             <label> {item.option1B} </label>
//             <br />

//             <input type="radio" value={item} name="radiovalue" />
//             <label> {item.option1C} </label>
//               {/* Question: 2 */}
//             <div>
//               <h4> {item.question2} </h4>
//               <input type="radio"  name="radiovalue" />
//               <label> {item.option2A} </label>
//               <br />

//               <input type="radio"  name="radiovalue" />
//               <label> {item.option2B} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option2C} </label>
//             </div>
//             {/* Question: 2 */}
//             <div>
//               <h4> {item.question2} </h4>
//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option2A} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option2B} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option2C} </label>
//             </div>
//             {/* Question 3 */}
//             <div>
//             <h4> {item.question3} </h4>
//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option3A} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option3B} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option3C} </label>
//                 </div>
//                 {/* Question 4 */}
//                 <div>
//                 <h4> {item.question4} </h4>
//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option4A} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option4B} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option4C} </label>
//                 </div>
//                 {/* Question 5 */}
//                 <div>
//                 <h4> {item.question5} </h4>
//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option5A} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option5B} </label>
//               <br />

//               <input type="radio" value={item} name="radiovalue" />
//               <label> {item.option5C} </label>
//                 </div>
//           </div>
//         );
//       })}
//       <button>Submit</button>
//     </div>
//   );
// }
export default Test;
