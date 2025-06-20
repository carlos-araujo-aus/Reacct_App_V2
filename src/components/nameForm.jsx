import { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <>
            <h2>Name Form</h2>
            <input className="name-input"
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
