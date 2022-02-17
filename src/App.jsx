import './App.css';
import Shopping from './views/Shopping/Shopping';
import { ShoppingListProvider } from './context/ShoppingListContext';

function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
        <Shopping />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
