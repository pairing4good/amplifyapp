import { render, screen, fireEvent } from '@testing-library/react';
import NoteForm from './NoteForm';

const setFormDataCallback = jest.fn();
const createNoteCallback = jest.fn();

const defaultProps = {
  formData: { 
    name: '',
    description: ''
  },
  setFormDataCallback: setFormDataCallback,
  createNoteCallback: createNoteCallback
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

test('should display the name placeholder', () => {
  setup()
  const input = screen.getByTestId('note-name-field');
  
  expect(input).toHaveAttribute('placeholder', 'Note name');
});

test('should display existing name value', () => {

  setup({formData: { name: 'test name'}})
  const input = screen.getByTestId('note-name-field');
  
  expect(input.value).toEqual("test name");
});

test('should display default name value', () => {

  setup({formData: { name: ''}})
  const input = screen.getByTestId('note-name-field');
  
  expect(input.value).toEqual("");
});

test('should set form data when name value updated', () => {
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

test('should display the description placeholder', () => {
  setup()
  const input = screen.getByTestId('note-description-field');
  
  expect(input).toHaveAttribute('placeholder', 'Note description');
});

test('should display existing description value', () => {

  setup({formData: { description: 'test description'}})
  const input = screen.getByTestId('note-description-field');
  
  expect(input.value).toEqual("test description");
});

test('should display default description value', () => {

  setup({formData: { description: ''}})
  const input = screen.getByTestId('note-description-field');
  
  expect(input.value).toEqual("");
});

test('should set form data when description value updated', () => {
  setup({formData: { description: 'test description'}})
  const input = screen.getByTestId('note-description-field');
  
  fireEvent.change(input, { target: { value: 'new test description' } })
  
  expect(setFormDataCallback.mock.calls.length).toBe(1);
  expect(setFormDataCallback.mock.calls[0][0])
    .toStrictEqual({ description: "new test description"});
});

test('should display create note button', () => {
  setup()
  const button = screen.getByTestId('note-form-submit')
  
  expect(button).toBeTruthy
  expect(button).toHaveTextContent('Create Note')
});

test('should submit the form when clicked', () => {
  setup()
  const button = screen.getByTestId('note-form-submit');
  
  fireEvent.click(button)
  
  expect(createNoteCallback.mock.calls.length).toBe(1);
});
