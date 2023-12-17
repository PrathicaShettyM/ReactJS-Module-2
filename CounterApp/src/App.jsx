import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function Increment(){
    console.log("Increment");
    setCount(count+1)
  }
  function Decrement(){
    console.log("Decrement");
    setCount(count-1);
  }
  return (
    <div className='CounterCard'>
      <div className='Count'>{count}</div>
      <div className='Btns'>
        <button className='btn' onClick={Increment}>Increment</button>
        <button className='btn' onClick={Decrement}>Decrement</button>
      </div> 
    </div>
  )
}

export default App
