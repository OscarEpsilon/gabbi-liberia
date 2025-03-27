import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const History = () => {

  return (
    <>
      <NavBar />
      <h1>Liberia &mdash; A Brief History</h1>
      <div className="content">
        <p>
          Though most historical accounts of the area that came to be known as Liberia tend to begin in 1822, the region had been inhabited by indigenous African peoples since at least the 1100s. Many of these peoples were most likely immigrants from the empires of Mali and Songhai, fleeing from desertification and political turmoil. They brought with them simple political structures and knowledge of textiles, smelting, and rice cultivation.
        </p>
        <img src={"./Map-Old.png"} width="95%" />
        <p className="caption">
          A map of these early empires
        </p>
        <p>
          Written accounts begin from European merchants in the late 1300s. Many of these sailors were Portuguese or Dutch. Europeans generally described the native pre-Liberian people as relatively 'civilized', enjoying political and social institutions influenced by the Mali and Songhai empires.
        </p>
        <p>
          Trade disputes created significant conflict between ethnic groups through the 1400s until the 1800s. The main competing groups were the Mandingo and Gola, who continually vied for control over access to the markets and trade routes in the area that would later be called Liberia. These conflicts reached their zenith just around the first quarter of the 19th century—as they were interrupted by a much more significant development in the region's history.
        </p>
        <p>
          In order to understand Americo-Liberian colonization, we must shift our focus and move back slightly. The 'issue' of African slavery had plagued the political landscape of the United States since before its inception—in fact, it was an issue so mired in money and moral outrage that any mention of it at all was intentionally left out of both the declaration of independence and the constitution. Among both white abolitionists and white slaveholders, however, was a shared general belief that blacks and whites were socially incompatible for any number of reasons. Some Americans, for completely opposing reasons, began to see the migration of the black population out of the United States as a logical and prudent solution to their worsening short-term ills.
        </p>
        <p>
          Out of this environment evolved the American Colonization movement, and its figurehead, the American Colonization Society. This American Colonization movement is a confusing movement to understand because it was, at its core, a confused movement. When it was founded by clergyman Robert Finley in 1816, its membership included many of the period's most significant figures—James Munroe, Henry Clay, John Randolph, Daniel Webster—including many figures with wildly opposing political- and world-views. If this surprises you, it should! Many members of the society had, in fact, wildly differing ideas of what the society was intended to do, and for what reason. Abolitionists and Black supporters saw repatriation as the best way for free blacks to become truly free, escaping the strong social bindings of racism and finding opportunity elsewhere. White slaveholders saw repatriation as a pragmatic solution to keep abolitionists pacified and free Blacks from gaining a foothold in American society. The idea of a solution that both political extremes could support seemed too good to be true.
        </p>
        <img src={"./Member.jpg"} width="95%" />
        <p className="caption">
          A membership certificate for the ACS
        </p>
        <p>
          It was. It must be noted that there were many abolitionists, both black and white, who abhorred the ACS, seeing its goal, rightly, as legitimizing the role of slavery in America and denying black Americans of their birthrights and freedoms. The ACS, with its continued interest in freeing slaves, also began to lose approval among southern slaveholders. Of course, the entire idea was absurd from the start—it would always be practically infeasible to move even a fraction of black Americans across the pacific ocean.
        </p>
        <p>
          Regardless, the ACS received significant federal support for its back-to-Africa ventures. It "purchased" some Liberian land from native chiefs, and established a colony later referred to as "Monrovia". Many ships carrying over 13,000 free American blacks, some of whom were opposed to their own migration, landed in Liberia in the following half-century. Expectedly, these free blacks wanted little to do with the native populations—and despite some resistance from these populations, with the assistance of superior technology and the United States Navy, the native peoples were quickly subdued.
        </p>
        <p>
          Local colonization societies in Maryland and elsewhere contributed to the cause, creating more colonies in the surrounding areas (the "Republic of Maryland", etc). In 1847, the Liberian colonists drafted their own declaration of independence, and their own constitution, modeled closely on the constitution of the United States. Soon after, the state-organized colonists also seceded and joined Liberia.
        </p>
        <img src={"./House.jpg"} width="95%" />
        <p className="caption">
          The estate of Liberia's first president, Joseph Roberts
        </p>
        <p>
          By the standards of other African nations, Liberia was a very prosperous one. Liberia, with its close US relationship, began to quickly modernize around the mid-1900s, and became a major economic power and a significant voice in world affairs. The government of Liberia was a strong advocate for peace and African unity, a founding member of the UN, and a strong critic of the systems of apartheid in South Africa. These achievements make what we know comes next all the more disappointing.
        </p>
        <img src={"./Carter.png"} width="95%" />
        <p className="caption">
          President Jimmy Carter visits Liberia
        </p>
        <p>
          Unfortunately, this prosperity was built on a rotting foundation. The indigenous groups which were 'pacified' in the 1800s did not go away—in fact, they made up more than 95% of the population of the country, but were generally disenfranchised and disempowered. The Americo-Liberians, former slaves and colonists, represented only a tiny fraction of the country's demographics, but held onto almost all of the country's power through an undemocratic system. This reached a boiling point in 1980, when an ethnically native army officer, Samuel Doe, led a military coup d'etat.
        </p>
        <img src={"./Map-95.png"} width="95%" />
        <p className="caption">
          A UN Map of Liberia dated 1995
        </p>
        <p>
          Doe's coup, tyrannic rule, and subsequent assassination launched the country into what would become an extremely long and grueling series of civil wars, which by 2003 had killed 250,000 Liberians (8% of the population!), and displaced many more. Liberia's once prosperous economy had shrunk by upwards of 90%, reducing the country to one of the poorest in the world. Ellen Johnson Sirleaf, Liberia's first post-war president, focused on rebuilding infrastructure—particularly schools—but in the two decades since the end of the war, Liberia is still only slowly limping towards recovery.
        </p>
        <div className="quiz">
          <p className="direction">WAIT HERE FOR FURTHER DIRECTION. DO NOT EXPLORE THE LINKS BELOW YET.</p>
          <Link to="/econ">
            <p className='sourcesLink'>[Topic 1: Economics]</p>
          </Link>
          <Link to="/social">
            <p className='sourcesLink'>[Topic 2: Society]</p>
          </Link>
          <Link to="/politics">
            <p className='sourcesLink'>[Topic 3: Politics]</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default History;
