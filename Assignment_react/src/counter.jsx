import React,{useState} from 'react'

const counter = () => {
    const [count, setCount] = useState(1)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count => count + 1)}>Add</button>
      <button onClick={()=>setCount(count => (count > 0 ? count - 1:count))}>sub</button>
    </>
  )
}

export default counter
