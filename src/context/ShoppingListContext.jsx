import { createContext, useContext, useReducer } from 'react';

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
    case 'cleared': {
      return [];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
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

  const handleClearCart = () => {
    dispatch({
      type: 'cleared',
    });
  };

  return (
    <ShoppingListContext.Provider
      value={{ handleAddItem, handleEditItem, handleDelete, handleClearCart, items }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}

function useShoppingList() {
  const context = useContext(ShoppingListContext);

  if (context === undefined) {
    throw new Error('useShoppingList needs to be inside ShoppingListProvider');
  }
  return context;
}

export { ShoppingListProvider, useShoppingList };
