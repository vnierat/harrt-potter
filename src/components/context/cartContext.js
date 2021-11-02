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
        value={useCallback(item => {
          const newItems = itemsRef.current.filter(
            _item => _item.id !== item.id
          );
          setCart(newItems);
        }, [])}
      >
      {props.children}
      </RemoveCartContext.Provider>
    </CartContext.Provider>
  )
}