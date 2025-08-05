import React,{useState,useEffect} from 'react'
import axios from 'axios'

const fetch = () => {
    const [count, setCount] = useState(1)
    const [user, setUser] = useState('')
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then((response)=>setUser(response.data))
        .catch((err)=>setUser(null))
    },[count])

  return (
    <>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count=>(count<10?count+1:count))}>add</button> 
     <button onClick={()=>setCount(count=>(count>0?count-1:count))}>sub</button>
     {user &&(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
     )} 
    </>
  )
}

export default fetch
