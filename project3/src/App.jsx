import { useState } from 'react'
import InputBox from './components/InputBox'
import Header from './components/header'
// import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className=" flex justify-center h-screen bg-gray-800 text-2xl gap-5 items-center">
        <div className="bg-white w-96 h-96 rounded-xl">
          <Header />
          <InputBox name='Eat' />
          <InputBox name='Program' />
          <InputBox name='Python' />
        </div>
      </div>
     
    </>
  )
}

export default App
