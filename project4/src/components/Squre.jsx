import React,{useState} from 'react'

function Squre() {

  return (

    <>
      <div className="w-40 h-40 bg-white shadow-xl flex justify-center items-center text-5xl font-semibold transition-all duration-800  active:scale-90 shadow-zinc-900  rounded-full cursor-pointer" onClick={onclick}>
        x
      </div>
    </>
  )
}

export default Squre
