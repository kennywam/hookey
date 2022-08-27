import React from "react";
import NameCal from "./NameCalc";


const Counter = () => {

    const [count, setCount] = React.useState(110);
    const decrease = () => {
        setCount(count-1)
    }
    const increase = () => {
        setCount(count+1)
    }
    return(
        <div className="count">
            <div className="segment">
                <button className="button" onClick={decrease}>-</button>
                <button className="button" onClick={increase}>+</button>
                <label className="label">count: {count}</label>

            </div>
            <NameCal count ={count} />
        </div>
    )    
}

export default Counter