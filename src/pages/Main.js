import React from 'react'
import Home from "../images/home.svg"
import "../pages/Main.css"

const Main = ({setPage}) => {
    const onClick = (page) => {
        setPage(page);
    } 
    return (
        <div>
           <h3><img className= "homeimg" src={Home} width="400" height="400" alt= "Home Page Image"/></h3>
           <h4 className="header">Take care of your plants!</h4>
           <h5 className="body">Search a plant and add it to your garden!</h5>
           <button className= "button" onClick={() => onClick("Explore")}>Get Started</button>
       </div>
    )
}

export default Main