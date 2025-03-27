import AfMap from './components/AfMap'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <NavBar />
      <h1>Liberia &mdash; America's Unique African Colony</h1>
      <div className="content">
        <p>Welcome to my exhibition on the history of Liberia and the consequences of colonialism.</p>
        <p>
          Liberia is often counted among a special few African nations which have "never been ruled by a colonial power". <em>Is this a fair description?</em> For most of this exhibition, you will be individually reading the content of this website. Later on, you will break into groups, read specific sections, and present what you learned to the rest of the group.
        </p>
        <p>
          Please, <em>take your time.</em> The faster you get done, the longer you will have to wait for others to finish. Take the time to deeply understand and consider the material. If you find yourself finished early, you may formulate some questions for dicussion time at the end.
        </p>
        <p>
          To begin, click on Liberia on the map below.
        </p>
      </div>
      <AfMap />
      <br />
      <Link to="/sources">
        <p className='sourcesLink'>(Click To See Sources)</p>
      </Link>
    </>
  )
}

export default Home;
