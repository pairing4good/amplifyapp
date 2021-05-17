import { render, screen, fireEvent } from '@testing-library/react';
import NoteList from './NoteList';

const deleteNoteCallback = jest.fn();

const defaultProps = { 
    notes: [],
    deleteNoteCallback: deleteNoteCallback
 };
  
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props};
    return render(<NoteList {...setupProps}/>);
};

test('should display the note list section', () => {
    setup();
    const div = screen.getByTestId('note-list')
    
    expect(div).toBeTruthy
  });

  test('should have a margin on the bottom', () => {
    setup();
    const div = screen.getByTestId('note-list');
    
    expect(div).toHaveAttribute('style', 'margin-bottom: 30px;');
  });

  test('should render list of notes', () => {
    const notes = [
        {
            id: 1,
            name: 'test name 1',
            description: 'test description 1'
        },
        {
            id: 2,
            name: 'test name 2',
            description: 'test description 2'
        },
        {
            id: 3,
            name: 'test name 3',
            description: 'test description 3'
        },
    ]
    setup({notes: notes});
    
    const firstNote = screen.getByTestId('test-0');
    expect(firstNote).toBeTruthy;


    const secondNote = screen.getByTestId('test-1');
    expect(secondNote).toBeTruthy;

    
    const thirdNote = screen.getByTestId('test-2');    
    expect(thirdNote).toBeTruthy;
  });

  test('should render a note', () => {
    const notes = [
        {
            id: 1,
            name: 'test name 1',
            description: 'test description 1'
        }
    ]
    setup({notes: notes});
    
    const noteName = screen.getByTestId('test-name-0');
    expect(noteName).toBeTruthy;
    expect(noteName).toHaveTextContent("test name 1");

    const noteDescription = screen.getByTestId('test-description-0');
    expect(noteDescription).toBeTruthy;
    expect(noteDescription).toHaveTextContent("test description 1");

    const button = screen.getByTestId('test-button-0');
    expect(button).toBeTruthy;
    expect(button).toHaveTextContent("Delete note");
  });

test('should delete note when clicked', () => {
    const note = {
        id: 1,
        name: 'test name 1',
        description: 'test description 1'
    }
    const notes = [ note ]
    setup({notes: notes});
    const button = screen.getByTestId('test-button-0');
    
    fireEvent.click(button)
    
    expect(deleteNoteCallback.mock.calls.length).toBe(1);
    expect(deleteNoteCallback.mock.calls[0][0]).toStrictEqual(note);
  });