import { Link } from "react-router-dom"

function NavBar() {
    return <nav className="nav">
        <Link to="/">
            <img className= "icon" src={'./libfull.png'} width='60px' height='30px'/>
            <p className="titleText">Colonization and Liberia</p>
        </Link>
        <p className="signature">Warren Hayman</p>
    </nav>    
}

export default NavBar;