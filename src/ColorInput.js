import React, { useState } from 'react'

const ColorInput = ({color,setColor}) => {
        

  return (
    <>
        <input
        className='styleInputBox'
        placeholder='Enter color name'
        value = {color}
        onChange={(e) => setColor(e.target.value)}
        />
    </>

  )
}

export default ColorInput
