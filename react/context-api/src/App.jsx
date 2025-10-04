import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1'

export const myContext = createContext()

const App = () => {
  let data = {
    fname: 'Roshan',
    lname: 'Kumar'
  }
  return (
    <myContext.Provider value={data}>
      <div>
        <Child1/>
      </div>
    </myContext.Provider>
  )
}

export default App