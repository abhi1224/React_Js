import React from 'react'
import Squre from './Squre'
import { useState } from 'react'

function Board() {


  return (
    <>
      <div className="flex justify-center h-screen items-center bg-gray-800 ">

        <div className="space-y-5 rounded-xl p-5">
            <div className="flex gap-5 ">
                <Squre />
                <Squre />
                <Squre />
            </div>
            <div className="flex gap-5 ">
                <Squre />
                <Squre />
                <Squre />
            </div>
            <div className="flex gap-5 ">
                <Squre />
                <Squre />
                <Squre />
            </div>
        </div>
      </div>
    </>
  )
}

export default Board
