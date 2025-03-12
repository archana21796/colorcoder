import logo from './logo.svg';
import './App.css';
import ColorDisplay from './ColorDisplay';
import ColorInput from './ColorInput';
import ToggleColor from './ToggleColor';
import { useState } from 'react';


function App() {

  const [color, setColor] = useState("")
  const [textColor, setTextColor] = useState("black")


  return (
    <>
    <div className='componentStyle'>
        <ColorDisplay color={color}
        textColor={textColor}/>
        <ColorInput color={color}
        setColor={setColor}/>
        <ToggleColor setTextColor={setTextColor}/>
    </div>
    </>
  );
}

export default App;
