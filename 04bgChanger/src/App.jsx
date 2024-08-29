import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
    className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2'
        >
          <div className='fixed flex flex-wrap justify-center
          gap-3 shadow-lg bg-white py-2 px-3 rounded-xl'
          >
            <botton
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >Red</botton>
            <botton
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
            >Green</botton>
            <botton
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >Blue</botton>
          </div>
        </div>
      Hello
      </div>
  )
}

export default App
