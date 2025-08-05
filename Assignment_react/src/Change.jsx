import React,{useState} from 'react'

const Change = () => {
    const [change, setChange] = useState('')
  return (
    <>
        <input type="text" placeholder='Type something...' onChange={(e)=>setChange(e.target.value)} />
        <h1>{change}</h1> 
    </>
  )
}

export default Change
