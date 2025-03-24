import { useState } from 'react'
import './App.css'
import AfMap from './components/AfMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Colonization and Liberia</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <AfMap />
    </>
  )
}

export default App
