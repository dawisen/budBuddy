import { Link } from "react-router-dom";
import Logo from "../images/logo.svg"
import "../pages/Main.css"

const NavBar = () => {
    return (
      <div>
        <nav className="whiteSpace">whitespace</nav>
        <nav className="navbar navbar-expand-lg">
          <h1>
            <img className="disp" src={Logo} width="100" height="100" alt="Home Page Image" />
          </h1>
          <h2 className="navbar-brand text-white">Bud Buddy</h2>
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
          <Link className="nav-link text-white" to="/myplants">
            My Plants
          </Link>
          <Link className="nav-link text-white" to="/explore">
            Explore
          </Link>
        </nav>
      </div>
    );    
}

export default NavBar