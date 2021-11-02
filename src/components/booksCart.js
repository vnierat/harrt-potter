import React, {useEffect, useContext, useState} from 'react';
import {CartContext, RemoveCartContext} from './context/cartContext';
import Offers from './offers';

export const Cart = () => {
    const [proms, setOffers] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const removeItem = useContext(RemoveCartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    useEffect(()=>{
        fetch('https://henri-potier.techx.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861/commercialOffers')
        .then(response => response.json())
        .then(setOffers);
    }, []);

    if (proms.length !== 0) {
        var percent = proms.offers[0].type;
        var minus = proms.offers[1].type;
        var slice = proms.offers[2].type;

        const percentVal = proms.offers[0].value;
        const minusVal = proms.offers[1].value;
        const sliceVal = proms.offers[2].value;

        const sliceValue = proms.offers[2].sliceValue;

        var priceMinus;
        var priceSlice;
        var minOffer;

        //Calc percent 
        let percentage = totalPrice*(percentVal/100)
        var pricePercent = totalPrice - percentage;
        let compareAmount;

        // Calc minus
        if (totalPrice > 0) priceMinus = totalPrice - minusVal;

        

        // Calc Slice
        if (totalPrice < sliceValue) {
            priceSlice = totalPrice
        } else  {
            let temp = totalPrice / sliceValue;
            let floor = Math.floor(temp);

            let reducSlice = floor * sliceVal;

            priceSlice = totalPrice - reducSlice;
        }

        if (pricePercent !== undefined && priceMinus !== undefined) {
            compareAmount = [pricePercent, priceMinus, priceSlice];
            minOffer = Math.min(...compareAmount); 
        }

        
        
    }


    
    if (cart.length === 0) return <h2>Votre panier est vide</h2>;
    
    
    return (
        <>
            <div className="cart">
                <div className="infosCart">
                    <div className="bold">Prix sans réduction : {totalPrice}€</div>

                    

                    <div className="cartCounter">
                        <i className="fas fa-shopping-cart cartNav"></i>
                        <div className="counter">{cart.length}</div> 
                    </div>
                </div>

                <Offers minOffer={minOffer} priceMinus={priceMinus} pricePercent={pricePercent} priceSlice={priceSlice} minus={minus} percent={percent} slice={slice}/>
                
                    {cart.map((book, index) => (<div key={book.key+index}>
                        <div className="article">
                            <div className="itemsCart">
                                <img className="coverCart" src={book.cover} alt="book"/>
                                <div className="bold infos">{book.title}</div>
                                <div className="bold infos">{book.price}€ </div>
                            </div>
                            <button className="delButton" onClick={e => removeItem(book)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>))}
            </div> 
            
            
        </>
    )
    
    
    
}