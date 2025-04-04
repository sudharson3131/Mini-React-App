import { useState } from "react";
import CounterApp from "./CounterApp";
import RandomNumber from "./RandomNumber";
import './home.css';

const Home = () => {
  const [selectedApp, setSelectedApp] = useState("");
  const goBack = () => {
    setSelectedApp(""); // reset to home
  };
 
  return (
    <div className="home-wrapper">
      {selectedApp === "" ? (
        <div className="home-container">
          <h1 className="title">🚀 Welcome to Mini React Apps</h1>
          <p className="subtitle">Choose your favorite app to get started</p>
          <div className="card-container">
            <div className="app-card" onClick={() => setSelectedApp("counter")}>
              <h2>🔢 Counter App</h2>
              <p>Simple counter to increment or decrement numbers.</p>
            </div>
            <div className="app-card" onClick={() => setSelectedApp("random-number")}>
              <h2>🎲 Random Number Game</h2>
              <p>Generate a fun random number from 1 to 10!</p>
            </div>
          </div>
        </div>
      ) : selectedApp === "counter" ? (
        <CounterApp goBack={goBack}/>
      ) : (
        <RandomNumber goBack={goBack}/>
      )}
    </div> 
  );
};

export default Home;
