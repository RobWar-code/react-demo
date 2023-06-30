import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       httpError: null
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts/99999')
    .then(response => {
        this.setState({
            // To allow for a single object to be returned
            posts: Array.isArray(response.data) ? response.data : [response.data]
        })
    })
    .catch((error) => {
        this.setState({
            httpError: error.message
        })
    })
  }

  render() {
    const posts = this.state.posts
    return (
      <div>
        <h1>Posts:</h1>
        { posts.length ? (
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
            this.state.httpError ? (
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
}

export default HTTPRequests