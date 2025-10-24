import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import { useRef } from 'react'

const App = () => {
  // const [count, setCount] = useState(0);
  // const ref = useRef(0);

  // const handleClick = () => {
  //   setCount(count+1);
  //   ref.current = ref.current + 1;
  //   console.log(ref.current);

  // }

  const ref1 = useRef()

  useEffect(() => {
    if (!ref1.current) {
      return null;
    } else {
      // ref1.current.style.innerText = "hello";
      ref1.current.style.backgroundColor = "red";

    }
  }, []);

  // if (!ref1.current) {
  //   return null;
  // } else {
  //   ref1.current.style.backgroundColor = "red";
  //   console.log('error')
  // }

  return (
    <div>
      {/* <p>Value of Count: {count}</p>
      <p>Value of Ref: {count}</p>
      <button onClick={handleClick}>Increase</button> */}

      <p ref={ref1}>Roshan</p>
      {/* {ref1.current.style.color = "green"} */}

    </div>
  )
}

export default App