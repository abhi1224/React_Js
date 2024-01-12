
import React from 'react'

function Navbar({name = 'logo'}) {
  return (
    <>
        <header className="w-screen"> 
            <nav className='flex p-5 justify-evenly'>
                <h1 className="text-3xl font-semibold basis-3/4">{name}</h1>
                <ul className="flex gap-10 basic-1/4 ">
                    <li className='cursor-pointer hover:text-gray-700 text-lg font-semibold'><a href=""></a>Home</li>
                    <li className='cursor-pointer hover:text-gray-700 text-lg font-semibold'><a href=""></a>About</li>
                    <li className='cursor-pointer hover:text-gray-700 text-lg font-semibold'><a href=""></a>Contact</li>
                </ul>                
            </nav>
        </header>      
    </>
  )
}

export default Navbar
