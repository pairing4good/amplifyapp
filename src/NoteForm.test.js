import { render, screen } from '@testing-library/react';
import NoteForm from './NoteForm';
  
test('should display the note name field', () => {
  render(<NoteForm />);
  expect(screen.getByTestId('note-name-field')).toBeTruthy();
});
