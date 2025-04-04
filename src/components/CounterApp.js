import { useState } from "react";
import "./counter.css"

function CounterApp({goBack}){

    var [count,setCount] = useState(0)

    function incrementval(){
        setCount(count+1)

    }
    function decrementval(){
        setCount(count-1)
    }

    
    return(
        <div className="counter-container">
            <button onClick={goBack} className="back-button">HOME</button>
            <h1 className="counter-heading">COUNTER APP </h1>
            <h1 className="counter-heading">{count}</h1>
            <button onClick={decrementval} className="counter-btn">-</button>
            <button onClick={incrementval} className="counter-btn">+</button>
        </div>
        
    )
}

export default CounterApp;