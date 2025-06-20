import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Active 🎉" : "Inactive 🤔"}
            </button> <br />
        </>
    )

}

export default ToggleButton;