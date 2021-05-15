import { render, screen, fireEvent } from '@testing-library/react';
import NoteForm from './NoteForm';

const setFormDataCallback = jest.fn();

const defaultProps = {
  formData: { name: 'bob'},
  setFormDataCallback: setFormDataCallback
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props};
  return render(<NoteForm {...setupProps} />);
};

test('should display the note name field', () => {
  setup()
  const input = screen.getByTestId('note-name-field')
  
  expect(input).toBeTruthy
});

test('should display placeholder description', () => {
  setup()
  const input = screen.getByTestId('note-name-field');
  
  expect(input).toHaveAttribute('placeholder', 'Note name');
});

test('should display existing value', () => {

  setup({formData: { name: 'test name'}})
  const input = screen.getByTestId('note-name-field');
  
  expect(input.value).toEqual("test name");
});

test('should display default value', () => {

  setup({formData: { name: ''}})
  const input = screen.getByTestId('note-name-field');
  
  expect(input.value).toEqual("");
});

test('should set form data when input value updated', () => {
  setup({formData: { name: 'test name'}})
  const input = screen.getByTestId('note-name-field');
  
  fireEvent.change(input, { target: { value: 'new test name' } })
  
  expect(setFormDataCallback.mock.calls.length).toBe(1);
  expect(setFormDataCallback.mock.calls[0][0])
    .toStrictEqual({ name: "new test name"});
});

test('should display the note description field', () => {
  setup()
  const input = screen.getByTestId('note-description-field')
  
  expect(input).toBeTruthy
});