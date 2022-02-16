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
