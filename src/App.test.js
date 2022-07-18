import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yariv React Test 2022-07-17-1927/i);
  expect(linkElement).toBeInTheDocument();
});
