import React from 'react'

function InputBox(props) {
  return (
    <>
      <div className="flex justify-between px-10 py-5 items-center gap-20">
        <input type="checkbox" name="check" id="" />
        <p>{props.name}</p>
        <span>...</span>
      </div>
    </>
  )
}

export default InputBox
