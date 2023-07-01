import React, {useEffect, useState} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([])
    const [httpError, setHttpError] = useState(null)
    const [data, setData] = useState({})
    const [httpMessage, setHttpMessage] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then (response => {
            setPosts(response.data)
        })
        .catch (error => {
            setHttpError(error.message)
        })
    }, []);

    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: "My First Post",
            body: "The best load of nonsensical gibberish ever to enter the world",
            userId: 123
        })
        .then (response => {
            setHttpMessage("Post Sent Ok")
            setData(response.data)
        })
        .catch (error => {
                setHttpMessage(error.message)
        })
    }
    

    return (
        <div>
        <div>
            <h2>Submit Post</h2>
            <button onClick={postToApi}>Click to Send</button>
            {httpMessage ? (
                <div>
                    <h2>Post Status</h2>
                    <p>{httpMessage}</p>
                    <h2>Title: {data.title}</h2>
                    <p>{data.body}</p>
                    <p>Id: {data.id}</p>
                    <p>User-id: {data.userId}</p>
                </div>
            ):
            (
                <h2>Loading...</h2>
            )}
        </div>
        <h2>Posts:</h2>
        {   posts.length ? (
            posts.map((post) => {
                return (
                <div key={post.id}>
                    <h2>{post.id}. {post.title}</h2>
                    <h4>By User Id: {post.userId}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
                )
            })
            ):(
                httpError ? (
                    <h2>Loading Error!</h2>
                ) :
                (
                    <h2>Loading Posts...</h2>
                )
            )
        }
        </div>
    )
}

export default HTTPHooks