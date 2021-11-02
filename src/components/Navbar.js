import React, {useContext} from "react";
import '../styles/global.css';
import {CartContext} from './context/cartContext';

let titleAppName = 'Bibliothèque Henri Potier';

const Navbar = () => {
    const [cart] = useContext(CartContext);
    return (
        <header>
            <div className="titleHeader">
                <div className="iconLogo"><i className="fas fa-bolt"></i></div>
                {titleAppName}
            </div>
            <div className="cartCounter">
                <i className="fas fa-shopping-cart cartNav"></i>
                <div className="counter">{cart.length}</div> 
                
            </div>
        </header>
    )
}

export default Navbar;