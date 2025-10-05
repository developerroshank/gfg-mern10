import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  }

  // useEffect(() => {
  //   console.log('hello');
  // }, []);

  // useEffect(() => {
  //   return function () {
  //     console.log('first')
  //   }
  // }, [])

  const url = "https://jsonplaceholder.typicode.com/users/1";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Click {count}</button>
    </div>
  )
}

export default App