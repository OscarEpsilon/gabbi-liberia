import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Econ = () => {

  return (
    <>
      <NavBar />
      <h1>Economic Colonial Legacies</h1>
      <div className="content">
        <p>
          Liberia, like many other African nations, was only economically empowered as a producer of raw materials. In the case of Liberia specifically, this export-economy can be traced to one crucial export: rubber.
        </p>
        <p>
          When the Firestone (now Bridgestone) Tire company signed a contract with the Liberian government in 1926, the country began to receive massive foreign investment, at the cost of its land. Firestone quickly became the most important part of the Liberian economy, and by 1955, $45,000,000 out of the country's $55,000,000 export value was solely a result of the rubber industry. Firestone developed extreme influence over the Liberian government.
        </p>
        <img src={"./Plant.png"} width="95%" />
        <p className="caption">
          A Firestone Tire plantation
        </p>
        <p>
          At the same time, the rubber plantations were worked by the forced labor of the lower-class indigenous groups, who created this extremely lucrative business for the Americo-Liberians for almost nothing in return. This system mirrors those seen in other African direct-rule colonies, despite the country's freedom.
        </p>
        <p>
          This export strategy, though lucrative, is often considered harmful to a country's economy in the long run. The risk of decrease in a commodity's value, and the lack of the development of the economy into more skilled work prevents economic hardiness and diversity, making the country particularly vulnerable to conflict and recession—not to mention the human rights abuses, including forced labor, inherent in this mass export strategy. Keeping the vast majority of the population as a destitute underclass also further undermined Liberia's economic resilience.
        </p>
        <p>
          In this case, the colonial legacy is the fragility of the Liberian economy as a result of colonial-like exploitative practices, and the neo-colonial effects of the support of multinational corporate investment.
        </p>
      </div>
      <Link to="/landing">
        <p className='sourcesLink'>[Click to Next Page]</p>
      </Link>
    </>
  )
}

export default Econ;
