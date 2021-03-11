import Logo from "../images/logo.svg"
import "../pages/Main.css"

const NavBar = ({setPage}) => {

    const onClick = (page) => {
        setPage(page);
    }

    return (
      <div>
        <nav class="whiteSpace">whitespace</nav>
        <nav class="navbar navbar-expand-lg">
          <h1>
            <img className="disp" src={Logo} width="100" height="100" alt="Home Page Image" />
          </h1>
          <h2 class="navbar-brand text-white">Bud Buddy</h2>
          <a class="nav-link text-white" href="#" onClick={() => onClick("Home")}>
            Home
          </a>
          <a class="nav-link text-white" href="#" onClick={() => onClick("My Plants")}>
            My Plants
          </a>
          <a class="nav-link text-white" href="#" onClick={() => onClick("Explore")}>
            Explore
          </a>
        </nav>
      </div>
    );    
}

export default NavBar