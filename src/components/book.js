import React, { useContext }  from "react";
import { CartContext } from "./context/cartContext";


const Book = (props) => {

    const { book } = props;
    const [cart,setCart] = useContext(CartContext);
    const addToCart = () => {
      const selectedBook = {cover: book.cover, title: book.title, price: book.price, key: book.isbn};
      setCart(currentState => [...currentState, selectedBook]);
    }

    return (
      <div className="bookItem">
          <img src={book.cover} alt="harry"/>
          <div className="bookTitle">
              {book.title}
              <div className="bookPrice">Prix conseillé : {book.price}€</div>
            </div>
          <button className="addToCartButton" onClick={addToCart}><i className="fas fa-cart-plus"></i> Ajouter au panier</button>  
      </div>
    );
}
export default Book;




  



