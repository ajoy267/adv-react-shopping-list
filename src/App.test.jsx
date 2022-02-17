import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Checking if my initial state renders on screen', () => {
  render(<App />);

  const heading = screen.getByRole('heading', { name: /shopping list/i });
  const totalItems = screen.getByRole('heading', { name: /total items: 2/i });
  const clearCartBtn = screen.getByRole('button', { name: /clear cart/i });
  const addInput = screen.getByRole('textbox');
  const addBtn = screen.getByRole('button', { name: /add/i });
  const firstItem = screen.getByText(/eggs/i);
  const firstItemEditBtn = screen.getByRole('button', { name: /edit eggs/i });
  const firstItemDeleteBtn = screen.getByRole('button', { name: /delete eggs/i });
  const secondItem = screen.getByText(/bread/i);
  const secondItemEditBtn = screen.getByRole('button', { name: /edit bread/i });
  const secondItemDeleteBtn = screen.getByRole('button', { name: /delete bread/i });

  expect(heading).toBeInTheDocument();
  expect(totalItems).toBeInTheDocument();
  expect(clearCartBtn).toBeInTheDocument();
  expect(addInput).toBeInTheDocument();
  expect(addBtn).toBeInTheDocument();
  expect(firstItem).toBeInTheDocument();
  expect(firstItemEditBtn).toBeInTheDocument();
  expect(firstItemDeleteBtn).toBeInTheDocument();
  expect(secondItem).toBeInTheDocument();
  expect(secondItemEditBtn).toBeInTheDocument();
  expect(secondItemDeleteBtn).toBeInTheDocument();
});

test('Lets you add pizza to item list', () => {
  render(<App />);

  const addInput = screen.getByRole('textbox');
  const inputName = 'Pizza';
  userEvent.type(addInput, inputName);

  const addBtn = screen.getByRole('button', { name: /add/i });
  userEvent.click(addBtn);

  const item = screen.getByText(/pizza/i);
  expect(item).toBeInTheDocument();
});

test('Lets you delete eggs from item list', () => {
  render(<App />);

  const itemName = screen.getByText(/eggs/i);
  const deleteBtn = screen.getByRole('button', { name: /delete eggs/i });
  userEvent.click(deleteBtn);

  expect(itemName).not.toBeInTheDocument();
});

test('Lets you edit bread to dough', () => {
  render(<App />);

  const firstName = screen.getByText(/bread/i);
  const editBtn = screen.getByRole('button', { name: /edit bread/i });
  userEvent.click(editBtn);

  const editInput = screen.getByRole('textbox', { name: /edit bread/i });
  const secondName = '{selectall}{del}Dough';
  userEvent.type(editInput, secondName);

  const saveBtn = screen.getByRole('button', { name: /save/i });
  userEvent.click(saveBtn);

  const result = screen.getByText(/dough/i);

  expect(firstName).not.toBeInTheDocument();
  expect(result).toBeInTheDocument();
});

test('Checking if my clearCart Button removes my list of entries', () => {
  render(<App />);

  const clearCartBtn = screen.getByRole('button', { name: /clear cart/i });
  const firstItem = screen.getByText(/eggs/i);
  const firstItemEditBtn = screen.getByRole('button', { name: /edit eggs/i });
  const firstItemDeleteBtn = screen.getByRole('button', { name: /delete eggs/i });
  const secondItem = screen.getByText(/bread/i);
  const secondItemEditBtn = screen.getByRole('button', { name: /edit bread/i });
  const secondItemDeleteBtn = screen.getByRole('button', { name: /delete bread/i });

  userEvent.click(clearCartBtn);

  expect(firstItem).not.toBeInTheDocument();
  expect(firstItemEditBtn).not.toBeInTheDocument();
  expect(firstItemDeleteBtn).not.toBeInTheDocument();
  expect(secondItem).not.toBeInTheDocument();
  expect(secondItemEditBtn).not.toBeInTheDocument();
  expect(secondItemDeleteBtn).not.toBeInTheDocument();
});
