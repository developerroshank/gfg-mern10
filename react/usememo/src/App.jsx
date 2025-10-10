import React from 'react'
import { useState, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const sum = () => {
    console.log('I am a heavy task dont run me')
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }

  // const res = sum();
  const res = useMemo(sum, []);

  return (
    <div>
      <p>Result of heavy computation task: {res}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App