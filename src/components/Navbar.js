import React from "react";
import '../styles/global.css'

let titleAppName = 'Bibliothèque Henri Potier';

const Navbar = () => {
    return (
        <header>
            <div className="iconLogo"><i className="fas fa-quidditch"></i></div>
            <div className="titleHeader">{titleAppName}</div>
        </header>
    )
}

export default Navbar;