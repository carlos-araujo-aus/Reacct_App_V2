import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count +1}
        case "decrement":
            return { count: state.count -1}
        case "reset":
            return { count: state.count =0}
        default:
            return state;
    }
}

const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <>
            <h2>The counter is set to {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment"})}>
                Incremet
            </button>
            <button onClick={() => dispatch({ type: "decrement"})}>
                Decremet
            </button>
            <button onClick={() => dispatch({ type: "reset"})}>
                Reset
            </button>
        </>
    )

}

export default CounterWithUseReducer;