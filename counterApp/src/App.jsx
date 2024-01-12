import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addOne = () => {
    console.log("clicked" , count)
    if(count == 20){
      count = 0
    }
    else{
      setCount(count + 1)
    }
  }

  const subOne = () => {

    if(count == 0){
      
    }
    else{
      setCount(count - 1)
    }
  }
  return (
    <>
     <div className="container">
        <h1>Counter App</h1>
        <button onClick = {addOne}>Add One {count}</button>
        <br />
        <button onClick = {subOne}>Sub One {count}</button>
      </div>     
    </>
  )
}

export default App
