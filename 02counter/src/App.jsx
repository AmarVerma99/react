import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //let counter=15;
  let [counter,setCounter]=useState(15);

  const addValue =()=>{
    if(counter==20) return;
    counter=counter+1;
    setCounter(counter);
  }
  const removeValue =()=>{
    if(counter!=0) {
    counter=counter-1;
    setCounter(counter);
    }
  }


  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter:{counter}</h2>

     <button 
      onClick={addValue}>
      add value {counter}</button>
     <br />
     <button onClick={removeValue}>
      remove value {counter} </button>

     <footer>footer {counter}</footer>
    </>
  )
}

export default App
