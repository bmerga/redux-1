import { useState } from 'react'
import counter from './Components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counter />
    </>
  )
}

export default App
