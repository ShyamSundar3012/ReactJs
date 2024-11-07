import { useState } from 'react'
import { Counter } from './Counter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to the App</h1>
        <Counter /> {/* Include the Counter component */}
    </div>
    </>
  )
}

export default App
