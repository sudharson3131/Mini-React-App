import { useState } from "react";
import "./RandomNumber.css";

const RandomNumber = ({goBack}) => {
  const [count, setCount] = useState(0);

  function handleChange() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    setCount(randomNumber);
  }

  return (
    <div className="container">
      <button onClick={goBack} className="back-button">HOME</button>
      <h1 className="title">Random Number</h1>
      <button onClick={handleChange} className="generate-btn">
        Generate
      </button>
      <h2 className="random-number">{count}</h2>
    </div>
  );
};

export default RandomNumber;
