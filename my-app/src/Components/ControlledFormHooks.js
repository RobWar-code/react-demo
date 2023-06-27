import React, {useState} from 'react'

function ControlledFormHooks() {
  const [name, setName] = useState('')
  const [queryType, setQueryType] = useState("website")
  const [comments, setComments] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("State:", name, queryType, comments)
  }

  return (
    <div>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <h2>Please Fill Out the form Below</h2>
            <div>
              <label htmlFor="id-name">Your Name:</label>
              <input id="id-name" name="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div>
            <label htmlFor="id-query">Query Type:</label>
              <select id="id-query" name="queryType" value={queryType} onChange={(e) => {setQueryType(e.target.value)}}>
                <option value="website">Website Issue</option>
                <option value="order">Order Enquiry</option>
                <option value="general">General Issue</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments:</label>
              <textarea id="id-comments" name="comments" value={comments} onChange={(e) => {setComments(e.target.value)}}/>
            </div>
            <input type="submit" value="Submit" />
        </form>

    </div>
  )
}

export default ControlledFormHooks