import { useState } from 'react'
import './App.css'

function App() {
  const [login, setLogin] = useState(true);

  function Change(){
    setLogin(!login)
  }
  return(
    <div className='LoginCard'>
      <div className='img'>
        <img 
            src='https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png' 
            height="100px" 
            alt='Logo'/>
      </div>
      <div className='inputFields'>
        <input hidden={login} className='input' type='text' placeholder='Mobile Number'/>
        <input hidden={login} className='input' type='text' placeholder='Full Name'/>
        <input className='input' type='email' placeholder='Email'/>
        <input className='input' type='password' placeholder='Password'/>
      </div>
      <div className='btn'>{login?" SignIn ":" SignUp "}</div>
      
        <div className='link'>
          {login?"Don't have an account?":"Have an account?"}
            <span onClick={Change}>
              {login?"Sign Up":"Sign In"}
            </span>
        </div>
    </div>
  )

}

export default App
