import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <h2>Toggle Button</h2>
            <button className="toggle-button" onClick={() => setIsActive(!isActive)}>
                {isActive ? "Active 🎉" : "Inactive 🤔"}
            </button> <br />
        </>
    )

}

export default ToggleButton;