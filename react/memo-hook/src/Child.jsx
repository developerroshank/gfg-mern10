// Using React.memo()

// import React from 'react'

// const Child = React.memo((props) => {
//   console.log('child rendered again')
//   return (
//     <div>
//       <p>Value of Counter2: {props.count2}</p>
//     </div>
//   )
// })

// export default Child


// Importing React memo

import React from 'react'
import { memo } from 'react'

const Child = (props) => {
  console.log('child rendered again');
  return (
    <div>
      <p>Value of Counter2: {props.count2}</p>
    </div>
  )
}

export default memo(Child)