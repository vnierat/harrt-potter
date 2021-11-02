import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import BooksList from './components/booksList';
import { CartProvider } from './components/context/cartContext';
import './styles/global.css';
import './index.css';
import { Cart } from './components/booksCart';

const App = () => {
  return (
    <CartProvider>
      <div>
      <Navbar/>
      <BooksList/>
      <Cart/>
      </div>
    </CartProvider>
  )
}

render(<App />, document.getElementById('root'));