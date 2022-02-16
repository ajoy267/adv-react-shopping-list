import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
