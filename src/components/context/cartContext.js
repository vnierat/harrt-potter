import React, { createContext, useCallback, useRef, useState } from "react";

export const CartContext = React.createContext();
export const RemoveCartContext = createContext(item => {});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const itemsRef = useRef(cart);
  itemsRef.current = cart;
  return (
    <CartContext.Provider value={[cart, setCart]}>
         <RemoveCartContext.Provider
        value={useCallback(book => {
          const newItems = itemsRef.current.filter(
            _book=> _book.key !== book.key
          );
          setCart(newItems);
        }, [])}
      >
      {props.children}
      </RemoveCartContext.Provider>
    </CartContext.Provider>
  )
}