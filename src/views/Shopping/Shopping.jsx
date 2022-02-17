import React, { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import List from '../../components/List/List';

const initialState = [
  { id: 0, text: 'Eggs', done: false },
  { id: 1, text: 'Bread', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edited': {
      return items.map((item) => {
        if (item.id === action.choice.id) {
          return action.choice;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialState);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEditItem = (choice) => {
    dispatch({
      type: 'edited',
      choice,
    });
  };

  const handleDelete = (choiceId) => {
    dispatch({
      type: 'deleted',
      id: choiceId,
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItem onAddItem={handleAddItem} />
      <List items={items} onChange={handleEditItem} onDelete={handleDelete} />
    </div>
  );
}
