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