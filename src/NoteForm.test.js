import { render, screen } from '@testing-library/react';
import NoteForm from './NoteForm';
  
test('should display the note name field', () => {
  render(<NoteForm />);
  const input = screen.getByTestId('note-name-field')
  
  expect(input).toBeTruthy
});

test('should display placeholder description', () => {
  render(<NoteForm />);
  const input = screen.getByTestId('note-name-field');
  
  expect(input).toHaveAttribute('placeholder', 'Note name');
});
