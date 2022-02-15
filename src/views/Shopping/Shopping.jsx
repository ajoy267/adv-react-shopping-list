import React, { useReducer } from 'react';

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
  return <div>Shopping</div>;
}
