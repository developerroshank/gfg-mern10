import React from 'react'
import Custom from './Custom'

const App = () => {
  const [data] = Custom('https://jsonplaceholder.typicode.com/users');
  console.log(data);
  return (
    <div>
      {data && data.map((users) => (
        <p key={users.id}>{users.name}</p>
      ))
      }
    </div>
  )
}

export default App