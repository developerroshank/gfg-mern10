import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react';
import Child from './Child';

const App = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  const sayHi = useCallback(() => {
    console.log('first')
  }, []);

  return (
    <>
      <div>
        <p>Value of Counter1: {count1}</p>
        <button onClick={() => setcount1(count1 + 1)}>Increase1</button>
      </div>

      <div>
        <p>Value of Counter2: {count2}</p>
        <button onClick={() => setcount2(count2 + 1)}>Increase2</button>
      </div>

      <Child count2={count2} sayHi={sayHi} />
    </>
  )
}

export default App