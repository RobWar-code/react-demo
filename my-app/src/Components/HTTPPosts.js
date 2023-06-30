import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPosts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        data: {},
        httpMessage: null
    }
  }

  postToApi = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',
    {
        title: "My First Post",
        body: "The best load of nonsensical gibberish ever to enter the world",
        userId: 123
    })
    .then (response => {
        this.setState({
            httpMessage: "Post Sent Ok",
            data: response.data
        })
    })
    .catch (error => {
        this.setState({
            httpMessage: error.message
        })
    })

  }

  render() {
    return (
      <div>
        <button onClick={this.postToApi}>Click to Send</button>
            {this.state.httpMessage ? (
                <div>
                    <h2>Post Status</h2>
                    <p>{this.state.httpMessage}</p>
                    <h2>Title: {this.state.data.title}</h2>
                    <p>{this.state.data.body}</p>
                    <p>Id: {this.state.data.id}</p>
                    <p>User-id: {this.state.data.userId}</p>
                </div>
            ):
            (
                <h2>Loading...</h2>
            )}
        </div>
    )
  }
}

export default HTTPPosts