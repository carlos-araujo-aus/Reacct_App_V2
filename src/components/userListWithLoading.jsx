import { useState, useEffect } from "react";

const UsarListWithLoading = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect (() =>{
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/usersSSS")

                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }

                const data = await response.json()
                setUsers(data)

            } catch (error) {
                setError(error)

            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error.message) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
        <h2>User List with Fetch and Loading</h2>
            <ul>
                {
                    users.map ((user) =>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )

}

export default UsarListWithLoading;
