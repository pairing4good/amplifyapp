import { render, screen } from '@testing-library/react';
import Header from '../note/Header';
  
test('should display header', () => {
  render(<Header />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('My Notes App')
});
