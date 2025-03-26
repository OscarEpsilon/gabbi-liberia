import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Landing = () => {

  return (
    <>
      <NavBar />
      <h1>Landing Page</h1>
      <div className="content">
        <p>
          Now that you've finished reading about your topic, wait for a moment for others to finish. While you're waiting, feel free to test your knowlege of African geography with <a className='hyperlink' href="https://faculty.humanities.uci.edu/mitchell/africastudymap.html" target="_blank">this quiz.</a>
        </p>
      </div>
      <br />
      <Link to="/sources">
        <p className='sourcesLink'>(Click To See Sources)</p>
      </Link>
    </>
  )
}

export default Landing;
