import { useState, useEffect } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { // The useEffect is a hook that will be executed when the component is mounted
        console.log(`The counter has been updated to:  ${count}`);
    }, [count]); // The count is the dependency that will trigger the useEffect

    return (
        <>
            <h2>The counter is set to {count}</h2>
            <button className="counter-button-effect" onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default CounterWithEffect;