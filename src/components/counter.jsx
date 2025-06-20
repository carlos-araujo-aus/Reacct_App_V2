import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [totalCounter, setTotalCounter] = useState(0);



    return (
        <>
            <h2>The counter is set to {count}</h2>
            
            <button  className="counter-button"
                onClick={() => {setCount(count + 1); 
                setTotalCounter(totalCounter + 1)}}>
                    Increment
            </button>
            
            <button  className="counter-button"
                onClick={() => {setCount(count - 1); 
                setTotalCounter(totalCounter + 1)}}>
                    Decrement
            </button>
            
            <h2>The total counter so far is {totalCounter}</h2>
        </>
    )
}

export default Counter;
