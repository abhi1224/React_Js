import { useState, useCallback , useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [password , setPassword] = useState('')
  let [length, setLength] = useState(8)
  let [number, setNumber] = useState(false)
  let [char, setChar] = useState(false)


  const passwordGenetator = useCallback(() =>{ 
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'  
    if(number) str += '1234567890'
    if(char) str += '~!@#$%^&*()_+{}[]'

    for(let i = 1; i <= length ; i++){
      let randomPassword = Math.floor(Math.random() * (str.length + 1))
      pass += str.charAt(randomPassword)
    }
    setPassword(pass)
  },[length, setNumber, setChar, setPassword])

  useEffect(() => {
    passwordGenetator()
  },[setPassword, length, number, char])

  const paswordRef = useRef(null)
  const copyClipboard = () => {
    paswordRef.current?.select()
    // select between range
    // paswordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className="text-center h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="wrapper w-3/4 m-auto rounded-xl h-80 bg-gray-800 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold py-5">Password Generator</h1>
            <div className=" flex items-center justify-center">
              <input className='px-5 py-2 h-10 w-96 outline-none' value={password}  type="text" ref={paswordRef} readOnly/>
              <button className='px-5 py-2 h-10 outline-none bg-blue-900 rounded-r-xl font-semibold text-white' onClick={copyClipboard}>Copy text</button>
            </div>
            <div className='text-white my-5 w-full text-lg font-semibold'>
              <input type="range" name="length" min={0} max={50} id="length" onChange={(e) => setLength(e.target.value)} />
              <label htmlFor="length">Length {length}</label>

              <input className='mx-5' type="checkbox" name="number" id="number" defaultChecked={number} onChange={() => setNumber((prev) => !prev)} />
              <label htmlFor="number">Number</label>

              <input className='mx-5' type="checkbox" name="char" id="char" defaultChecked={char} onChange={() => setChar((prev) => !prev)} />
              <label htmlFor="char">Char</label>
            </div>
        </div>
    
      </div>
    </>
  )
}

export default App
