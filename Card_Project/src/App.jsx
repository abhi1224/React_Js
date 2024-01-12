import './App.css'
import Background from './Components/Background'
import Card from './Components/Card'
import { useRef } from 'react'

function App() {

  const ref = useRef(null)

  const data = [
    {
    desc : "Lorem ipsum, dolor sit amet consectetur",
    fileSize : '.9Mb',
    close:true,
    tag: {
      isOpen : true,
      tagColor : false,
      tagTitle : "Download Now"
    }
  },
    {
    desc : "Lorem ipsum, dolor sit amet consectetur",
    fileSize : '.9Mb',
    close:true,
    tag: {
      isOpen : true,
      tagColor : false,
      tagTitle : "Download Now"
    }
  },
    {
    desc : "Lorem ipsum, dolor sit amet consectetur",
    fileSize : '.9Mb',
    close:false,
    tag: {
      isOpen : true,
      tagColor : true,
      tagTitle : "Download Now"
    }
  },
    {
    desc : "Lorem ipsum, dolor sit amet consectetur",
    fileSize : '.9Mb',
    close:true,
    tag: {
      isOpen : false,
      tagColor : false,
      tagTitle : "Download Now"
    }
  },
]
  return (
    <>
      <div ref = {ref} className="w-full h-screen relative bg-gray-800 flex gap-5">
        <Background />
        {data.map((item , index) => (
          <Card  data = {item} reference = {ref}/>
        ))}
      </div>    
    </>
  )
}

export default App
