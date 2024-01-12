import { useState } from 'react'
import Navbar from '../Component/Navbar'
function App() {
  const [name, setName] = useState('Robert Steve')

  return (
    <>
      <div className="w-full h-screen bg-zinc-900/100 text-white">
        <Navbar name={name} />
      </div>
    </>
  )
}

export default App 
