import React from "react";

function Test() {
    const user=()=>{
        
    }
    return(
        <div>
             <form>
        <div className="radio">
          <label>
            <input type="radio"name="gender" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="gender"value="ammar" />
            Ammar 
          </label>
          <label>
            <input type="radio"name="gender" value="option3" />
            Option 3
          </label>
        </div>
        <div>
            <button onClick={user}>
                Submit
            </button>
        </div>
      </form>
        </div>
    )   
}
export default Test;
