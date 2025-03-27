import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Race = () => {

  return (
    <>
      <NavBar />
      <h1>Social Colonial Legacies</h1>
      <div className="content">
        <p>
          The settlers of Liberia were truly culturally unique. Though they might have, in the most vague sense, shared a racial identity with the natives they conquered, they were in all other senses truly American. They saw themselves as a more civilized and advanced race compared to those they had displaced, and adhered to American values, social norms, and class structures. They were devout Christians, spoke proper American English, and wore tall hats and frock coats. They built American-style homes, and designed an American-style government, and even flew an American-modelled flag.
        </p>
        <img src={"./Russ.jpg"} width="50%" />
        <p className="caption">
          John B. Russwurm, Governor of the Republic of Maryland
        </p>
        <p>
          Fascinatingly, they also tended to adhere to a strange variation of the American conception of race referred to as 'colorism' that began to surface some time after Liberian independence. Under this system, lighter-skinned people often expressed prejudice against those who were darker-skinned.
        </p>
        <p>
          Liberian settlers generally claimed that they desired to civilize the natives and bring them the American values of liberty and freedom—though they often appeared to want little to do with them at all, requiring natives to venture to urban areas to receive education (very few of whom did), and treating them as a lesser people. Often, natives would be forced to work fields for absentee Americo-Liberian landlords.
        </p>
        <p>
          The colonial legacy in this case is the imposition of American/European cultural values and the importation of American social features such as classism and racism into Liberia, which created the social strife that resulted in oppression and armed conflict.
        </p>
      </div>
      <Link to="/landing">
        <p className='sourcesLink'>[Click to Next Page]</p>
      </Link>
    </>
  )
}

export default Race;
