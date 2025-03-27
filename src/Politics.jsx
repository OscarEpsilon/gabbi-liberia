import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Politics = () => {

  return (
    <>
      <NavBar />
      <h1>Political Colonial Legacies</h1>
      <div className="content">
        <p>
          Liberia was designed and modelled to be an American-style democracy. However, its imposition on native systems of governance disrupted previously established political systems and replaced them with oppression.
        </p>
        <p>
          In 1877, only a few decades after Liberian independence, the political system had already degraded into what was essentially a one-party state: the True Whig Party seized control of government and though increasingly corrupt and rigged elections, remained in power until the complete collapse of the democratic system. Through this period, the executive branch gained increasing power, and checks and balances, while present, were slowly stripped away as the need for the Americo-Liberian TWP to remain in power demanded more and more reductions in fair and legitimate democratic governance.
        </p>
        <img src={"./Will.jpg"} width="95%" />
        <p className="caption">
          William Tolbert, the last president of Liberia before the civil wars
        </p>
        <p>
          As elections became less free and fair, and the power of the Liberian government over the native population grew, the Liberian state transformed from a democratic institution into what was effectively a colonial one. Ultimately, it was the failure of this governance that led to the decades of bloody strife in Liberia, which is the political legacy of these colonial political tendencies.
        </p>
      </div>
      <Link to="/landing">
        <p className='sourcesLink'>[Click to Next Page]</p>
      </Link>
    </>
  )
}

export default Politics;
