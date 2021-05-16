function NoteForm(props) {
    return (
        <div data-testid="note-list"
            style={{marginBottom: 30}}>
                {
                    props.notes.map(note => (
                        <div data-testid={'test-' + note.id}
                            key={note.id}>
                            <h2 data-testid={'test-name-' + note.id}>
                                {note.name}
                            </h2>
                            <p data-testid={'test-description-' + note.id}>
                                {note.description}
                            </p>
                            <button 
                                data-testid={'test-button-' + note.id}
                                onClick={() => props.deleteNoteCallback(note)}>
                                Delete note
                            </button>
                        </div>
                    ))
                }
        </div>
    );
  }
  
  export default NoteForm;