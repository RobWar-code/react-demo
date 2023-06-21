import React, { Component } from 'react'

export class Mounted extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loaded: "Loading"
    }
  }

  getState() {
    setTimeout(() => {
        this.setState({
            loaded: "Loaded"
        })
    }, 3000)
  }

  componentDidMount() {
    this.getState();
  }

  render() {
    return (
      <div>
        <h1>{this.state.loaded}</h1>
      </div>
    )
  }
}

export default Mounted