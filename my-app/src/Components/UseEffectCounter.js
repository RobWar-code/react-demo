import React, {useEffect, useState} from 'react'

function UseEffectCounter() {
  const [count, setCount] = useState(0)
  // Side-effect is update another component
  // This only runs if count is updated - see second argument
  useEffect(() => {document.title = count}, [count])

  return (
    <div>
        <button onClick={() => setCount(count => count + 1)}>Increment {count}</button>
    </div>
  )
}

export default UseEffectCounter