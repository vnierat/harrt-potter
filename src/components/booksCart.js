import React, {useContext} from 'react';
import {CartContext, RemoveCartContext} from './context/cartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const removeItem = useContext(RemoveCartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}€</span>
      <br/>
      {cart.map((book, index) => (<h6 key={book.key+index}>{book.title} - {book.price}  <button onClick={e => removeItem(book)}>Supprimer</button></h6>))}
      
    </div>
  )
}