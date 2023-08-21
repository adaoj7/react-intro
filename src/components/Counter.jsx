import { useState } from 'react'
export default function Counter(props){
   const [count,setCount] = useState(props.initalValue)
  function incrementCount(){
    console.log("It's working")
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button
      type='button'
      onClick={incrementCount}
      >
        Click me to increase the count
      </button>
    </>
  )
}