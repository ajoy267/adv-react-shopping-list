import React from 'react';
import { useShoppingList } from '../../context/ShoppingListContext';
import Item from './Item';
import './List.css';

export default function List() {
  const { items, handleEditItem, handleDelete } = useShoppingList();

  return (
    <div className="list-items">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} handleEditItem={handleEditItem} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
