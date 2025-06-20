import { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange= {(e) => setName(e.target.value)}>           
            </input>

            <p>Hello, {name || "Mate"}!</p>
        </>
    )
}

export default NameForm;
