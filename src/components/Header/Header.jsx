import React from 'react';
import { useShoppingList } from '../../context/ShoppingListContext';
import './Header.css';

const Header = () => {
  const { items, handleClearCart } = useShoppingList();

  return (
    <header>
      <h1>Shopping List</h1>
      <h3>Total Items: {items.length}</h3>
      <button type="button" onClick={handleClearCart}>
        Clear Cart
      </button>
    </header>
  );
};

export default Header;
