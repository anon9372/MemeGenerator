import React from "react";
import '../src/Header.css'
import logo from "../src/img/lol.png"


const Header = () => {

    return (
        <div className="navbar-main">


            <nav className="navbar">
                <div className="navbar-logo">
                    <img className="navbar-logo-img" src={logo}></img>
                    <h2 className="navbar-logo-text">Meme Generator</h2>
                </div>

                <h4 className="navbar-title">React Course - Project 3</h4>
            </nav>
        </div>


    )
}

export default Header;