// Controlled Component

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value)
//   }
//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//       <p>The value you are typing: {name}</p>
//     </>
//   )
// }

// export default App

// UnControlled Component

import React from 'react'
import { useRef } from 'react'
const App = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`What you are typing: ${inputRef.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
