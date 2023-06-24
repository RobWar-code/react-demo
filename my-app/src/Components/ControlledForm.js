import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ""
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        {/* This form in its basic form is uncontrolled
           However, we can make it controlled by referring to state
           elements and using a change event handler
        */}
        <form>
            <label htmlFor="id-name">Your Name:</label>
            <input id="id-name" name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm