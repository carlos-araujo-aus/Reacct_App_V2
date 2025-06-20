const StaticComponent = () => {
    const items = ["Item 4", "Item 5", "Item "]

    return (
        <>
            <h2>Static Component</h2>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default StaticComponent;