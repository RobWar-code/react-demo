import React, {useEffect, useState} from 'react'

function UseEffectCounter() {
  // Demonstrating also the use of run once effects
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  // Side-effect is update another component
  // This only runs if count is updated - see second argument
  useEffect(() => {document.title = count}, [count])

  useEffect(() => {
    // We only want to set this repeated interval up once
    const interval = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)

  }, []) // Note that leaving the conditional property empty indicates
  // that the effect is to be run only once.

  return (
    <div>
        <h1>Time: {time}</h1>
        <button onClick={() => setCount(count => count + 1)}>Increment {count}</button>
    </div>
  )
}

export default UseEffectCounter