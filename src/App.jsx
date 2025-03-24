import { useState } from 'react'
import './App.css'
import AfMap from './components/AfMap'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>Colonization and Liberia</h1>
      <div className="card">
        <p>
          Info about Liberia!
        </p>
      </div>
      <AfMap />
      <div className="quiz">
        <div>
          <p>
            Example question: Question what the question?
          </p>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
