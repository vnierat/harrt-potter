import { Component } from "react";


class Book extends Component {
    render() {
        let {book} = this.props;

        return(
            <div className="bookItem">
                <img src={book.cover} alt="harry"/>
                <div className="bookTitle">{book.title}</div>
                <button className="addToCartButton"><i className="fas fa-cart-plus"></i> Ajouter au panier</button>
            
            </div>
        )
    } 
}
export default Book;


  



