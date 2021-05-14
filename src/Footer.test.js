import { render, screen } from '@testing-library/react';
import Footer from './Footer';
  
test('should display footer', () => {
  render(<Footer />);
  expect(screen.getByTestId('sign-out')).toBeTruthy();
});
