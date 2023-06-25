import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "",
       queryType: "website",
       comments: ""
    }
  }

  /*
  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleQueryTypeChange = (event) => {
    this.setState({queryType: event.target.value})
  } 

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value})
  }
  */

  // The following replaces the methods above
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Include javascript here to handle the state data
    // set by the form and handlers
  }

  render() {
    return (
      <div>
        {/* This form in its basic form is uncontrolled
           However, we can make it controlled by referring to state
           elements and using a change event handler
        */}
        <form onSubmit={this.handleSubmit}>
            <h2>Please Fill Out the form Below</h2>
            <div>
              <label htmlFor="id-name">Your Name:</label>
              <input id="id-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
            <label htmlFor="id-query">Query Type:</label>
              <select id="id-query" name="queryType" value={this.state.queryType} onChange={this.handleChange}>
                <option value="website">Website Issue</option>
                <option value="order">Order Enquiry</option>
                <option value="general">General Issue</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments:</label>
              <textarea id="id-comments" name="comments" value={this.state.comments} onChange={this.handleChange}/>
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm