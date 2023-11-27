import React, { useState } from "react";
import "./App.css";
function App() {
  const [inpVal, setInpVal] = useState(null);
  const [inpValSecond, setInpValSecond] = useState(null);
  const [click, setClick] = useState(false);
  return (
    <div className="container">
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter num 1"
          value={+inpVal}
          onChange={(e) => setInpVal(+e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter num 2"
          value={+inpValSecond}
          onChange={(e) => setInpValSecond(+e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={(a, b) => setClick(inpVal + inpValSecond)}>
          ADD
        </button>
        <button onClick={(a, b) => setClick(inpVal - inpValSecond)}>
          SUBSCTRACT
        </button>
        <button onClick={(a, b) => setClick(inpVal / inpValSecond)}>
          DIVIDE
        </button>
        <button onClick={(a, b) => setClick(inpVal * inpValSecond)}>
          MULTIPLY
        </button>
        <h3>
          {click}
        </h3>
      </div>
    </div>
  );
}

export default App;
