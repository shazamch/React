import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [NumAllowed, setNumAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  
  const paswordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (NumAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*()-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, NumAllowed, CharAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    paswordRef.current?.select()
    // paswordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

useEffect(() => {
  passwordGenerator()
}, [length, NumAllowed, CharAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700 al'
      ><h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden md-4'>
          <input
          type="text" 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={paswordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox" 
            defaultChecked={NumAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            /> <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox" 
            defaultChecked={NumAllowed}
            id='charctorInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            /> <label htmlFor='charctorInput'>Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
