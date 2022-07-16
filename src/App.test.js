import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yariv React Test 2022-07-16-0706/i);
  expect(linkElement).toBeInTheDocument();
});
