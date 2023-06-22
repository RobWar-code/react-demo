import React, { Component } from 'react'

export class ComponentUpdated extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Hello"
    }
  }

  updateMessage = () => {
    this.setState(prevState => {
        return {
            message: prevState.message === "Hello" ? "Goodbye": "Hello"
        }
    })
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>Update</button>
      </div>
    )
  }
}

export default ComponentUpdated