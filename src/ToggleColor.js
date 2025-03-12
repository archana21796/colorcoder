import React from 'react'
import { useState } from 'react'

const ToggleColor = ({ setTextColor }) => {
    const toggleTextColor = () => {
      setTextColor(prevColor => (prevColor === "black" ? "white" : "black"));
    };

  return (
    <>
    <button className='styleTogglebtn'
    onClick={toggleTextColor}>
        Button to change text color
    </button>
    </>

  )
}

export default ToggleColor
