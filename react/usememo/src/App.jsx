import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default App