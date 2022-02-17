import { useState } from 'react';
import { useShoppingList } from '../../context/ShoppingListContext';
import './AddItem.css';

export default function AddItem() {
  const { handleAddItem } = useShoppingList();
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="New Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
