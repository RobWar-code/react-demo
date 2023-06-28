import React, {useState} from 'react'

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);

  const addNums = () => {
    setNums([...nums, nums.length + 1])
    // You cannot use the following in react
    // nums.push(nums.length + 1)
    // setNums(nums)
    // Because nums refers to the same place in memory
  }

  const removeNum = () => {
    let newNums = nums.filter((num, index) => {
        return (
            index <= nums.length - 2
        )
    });
    setNums(newNums)
  }

  return (
    <div>
      <ul>
        <button onClick={addNums}>Next Number</button>
        <button onClick={removeNum}>Remove Number</button>
        {nums.map((num) => {
            return (
                <li key={num}>{num}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default UseStateWithArrays