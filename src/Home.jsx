import { useState } from 'react'
import AfMap from './components/AfMap'
import NavBar from './components/NavBar'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>Liberia &mdash; America's Unique African Colony</h1>
      <div className="content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Info about Liberia!
        </p>
      </div>
      <AfMap />
      <div className="quiz">
        <div>
          <p className="quizq">
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
      </div>
      <div className="quiz">
        <div>
          <p className="quizq">
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
      </div>
    </>
  )
}

export default Home;
