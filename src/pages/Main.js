import React from 'react'
import { Link } from "react-router-dom";
import Home from "../images/home.svg"
import "../pages/Main.css"

const Main = () => {
    return (
      <div>
        <h3>
          <img className="homeimg" src={Home} width="400" height="400" alt="Home Page Image" />
        </h3>
        <h4 className="header">Take care of your plants!</h4>
        <h5 className="body">Search a plant and add it to your garden!</h5>
        <Link to="/explore">
          <button className="button">Get Started</button>
        </Link>
      </div>
    );
}

export default Main