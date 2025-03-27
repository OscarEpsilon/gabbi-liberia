import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Politics = () => {

  return (
    <>
      <NavBar />
      <h1>Liberia &mdash; America's Unique African Colony</h1>
      <div className="content">
        <p>
          Politics Page
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Info about Liberia!
        </p>
        <p>
          To begin, click on Liberia on the map below.
        </p>
      </div>
      <Link to="/landing">
        <p className='sourcesLink'>[Click to Next Page]</p>
      </Link>
    </>
  )
}

export default Politics;
