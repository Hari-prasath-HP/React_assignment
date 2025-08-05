import React,{useState,useRef} from 'react'
import "./App.css"
const Content = () => {
  const [content, setContent] = useState('')
  const inputref = useRef()
  const click = () =>{
    setContent(inputref.current.value)
  }
  return (
    <>
      <h1>Enter the content...</h1>
      <input type="text" ref={inputref} />
      <button onClick={click}>Show</button>
      <h1>{content}</h1>
    </>
  )
}

export default Content

