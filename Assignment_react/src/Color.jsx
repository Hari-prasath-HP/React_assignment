import React,{useState} from 'react'

const Color = () => {
    const [color, setColor] = useState(0)
    const isEven = color % 2 === 0
  return (
    <>
      <h1>{color}</h1>
      <button onClick={()=>setColor(color=>color + 1)}
        style={{backgroundColor:isEven ? 'green' : 'red'}}>change</button>
    </>
  )
}

export default Color
