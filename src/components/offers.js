import React  from "react";


const Offers = (props) => {
    /* let message = ''

    if (props.minOffer === props.pricePercent) {
        message = 'Avec l\'offre '+props.percent+' votre réduction sera de '+props.pricePercent
    }

    if (props.minOffer === props.priceMinus) {
        message = 'Avec l\'offre '+props.minus+' votre réduction sera de '+props.priceMinus
    }

    if (props.minOffer === props.priceSlice) {
        message = 'Avec l\'offre '+props.slice+' votre réduction sera de '+props.priceSlice
    } */

    if (props.minOffer === props.priceMinus) {
        return (
            <div className="offers">
                Avec l'offre <span className="bold">{props.minus}</span>, votre prix final sera de <span className="bold">{props.priceMinus}€</span>
            </div>
        );
    }

    if (props.minOffer === props.pricePercent) {
        return (
            <div className="offers">
                Avec l'offre <span className="bold">{props.percent}</span>, votre prix final sera de <span className="bold">{props.pricePercent}€</span>
            </div>
        );
    } 

    if (props.minOffer === props.priceSlice) {
        return (
            <div className="offers">
                Avec l'offre <span className="bold">{props.slice}</span>, votre prix final sera de <span className="bold">{props.priceSlice}€</span>
            </div>
        );
    }
}
export default Offers;