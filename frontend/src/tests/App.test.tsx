import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Todo component', () => {
  render(<App />);
  const linkElement = screen.getByText("Todo App");
  expect(linkElement).toBeInTheDocument();
});
