import React from 'react'
import { hexaColorValue } from './HexaColorUtils';

const ColorDisplay = ({color,textColor}) => {
    const hexaValue = hexaColorValue(color) || "Invalid Color";
  return (
    <div className='styleDisplayBox'
    style = {{backgroundColor:color,color:textColor}}>
         {hexaValue ==="#000000" ? "#Hexavalue" : hexaValue}
        <div>{color}</div>     
    </div>
  )
}

export default ColorDisplay
