import React, { Component } from 'react'

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props)
    // Note that this relates to the input items in the render method
    this.inputName = React.createRef();
    this.selectQueryType = React.createRef();
    this.textareaComments = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Include javascript here to handle the form data references
    console.log("Input Name", this.inputName.current.value);
    console.log("Select Query", this.selectQueryType.current.value);
    console.log("textareaComments", this.textareaComments.current.value);
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
              <input id="id-name" name="name" type="text" ref={this.inputName} />
            </div>
            <div>
            <label htmlFor="id-query">Query Type:</label>
              <select id="id-query" name="queryType" ref={this.selectQueryType}>
                <option value="website">Website Issue</option>
                <option value="order">Order Enquiry</option>
                <option value="general">General Issue</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments:</label>
              <textarea id="id-comments" name="comments" ref={this.textareaComments} />
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default UncontrolledForm