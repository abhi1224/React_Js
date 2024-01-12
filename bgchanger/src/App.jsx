import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className="container" style={{backgroundColor:color}}>
        <div className="button">
          <button onClick = {() => setColor('red')} style={{backgroundColor:'red'}} > Red</button>
          <button onClick = {() => setColor('green')} style={{backgroundColor:'green'}} > Green</button>
          <button onClick = {() => setColor('pink')} style={{backgroundColor:'pink'}} > Pink</button>
          <button onClick = {() => setColor('gray')} style={{backgroundColor:'gray'}} > Gray</button>
          <button onClick = {() => setColor('purple')} style={{backgroundColor:'purple'}} > Purple</button>
          <button onClick = {() => setColor('blue')} style={{backgroundColor:'blue'}} > Blue</button>
        </div>
        
      </div>
    </>
  )
}

export default App
