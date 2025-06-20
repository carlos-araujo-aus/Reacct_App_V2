import { useState , useEffect } from "react";

const SearchPost = () => {
    const [query, setQuery] = useState("")
    const[posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching posts: ", error))
    }, [query])

    return (
        <>
            <div>
                <h2>Search Post</h2>
                <input 
                    type= "text"
                    placeholder= "Search inside posts"
                    value= {query}
                    onChange= {(e) => setQuery(e.target.value)}
                />
                <ul>
                    {
                    posts.map((post, index) => (
                        <li key={index}>{post.title}</li>))
                    }
                </ul>

            </div>

        </>
    )    
}

export default SearchPost;
