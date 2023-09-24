import './App.css';
import ExtraCounter from "./ExtraCounter";
import {useEffect, useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  console.log('without useEffect')

  useEffect(() => {
    console.log('hello from app')
  },[])

  useEffect(() => {
    console.log('counter change')
  },[])

  return (
    <div className="App">
    <h1>Use Effect</h1>
      <button onClick={toggle}>{!isOpen ? 'open' : 'close'}</button>
      { isOpen && <ExtraCounter/>}
    </div>
  );
}

export default App;
