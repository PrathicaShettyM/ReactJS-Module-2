import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function Increment(){
    console.log("Increment")
  }
  function Decrement(){
    console.log("Decrement")
  }
  return (
    <>
      <button onClick={Increment}>Increment</button>
      <button></button>
    </>
  )
}

export default App
