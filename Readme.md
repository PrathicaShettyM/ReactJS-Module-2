# Walkthrough with ReactJS Assignment - 2
- This repository consists solutions for the 2 assignments of `Walkthrough with ReactJS - 2`.
- They have been divided into 2 folders : `CounterApp` and `InstagramLogin`

## CounterApp
1. set the state variable `count` to 0.
```
 const [count, setCount] = useState(0);
 ```
2. In the `setCount()` :
- Increment the count variable by 1 in the setter function for the Increment method
- Decrement the count variable by 1 in the setter function for the Decrement method
```
  function Increment(){
    console.log("Increment");
    setCount(count+1)
  }
  function Decrement(){
    console.log("Decrement");
    setCount(count-1);
  } 
  ```

## Instagram Login Page
1. The login page is designed using `conditional rendering` in ReactJS
2. set the state of the variable of the `login` to true.
```
  const [login, setLogin] = useState(true);
```
3. Add a custom function Change(), which changes the state of the variable login in the `setLogin` setter function.
```
 function Change(){
    setLogin(!login)
  }
```
4. Using `conditional rendering`, toggle between input fields for SignIn and SignUp
```
<div className='inputFields'>
  <input hidden={login} className='input' type='text' placeholder='Mobile Number'/>
  <input hidden={login} className='input' type='text' placeholder='Full Name'/>
  <input className='input' type='email' placeholder='Email'/>
  <input className='input' type='password' placeholder='Password'/>
</div>
```
5. The state of the Login page changes with `onClick` function, toggling between SignIn and SignUp due to conditional rendering  
```
   <div className='link'>
        {login?"Don't have an account?":"Have an account?"}
          <span onClick={Change}>
            {login?"Sign Up":"Sign In"}
          </span>
      </div>
```

### Run the programs on the local machine
1. Counter App 
```
  cd CounterApp
  npm run dev
```
2. Instagram Login Page
```
  cd InstagramLogin
  npm run dev
```