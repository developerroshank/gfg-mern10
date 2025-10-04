import React from 'react'
import { useContext } from 'react'
import { myContext } from './App'

const Child2 = () => {
  const data = useContext(myContext);
  return (
    <div>
      <p>
        {data.fname} {data.lname}
      </p>
    </div>
  )
}

export default Child2