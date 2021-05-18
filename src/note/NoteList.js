function NoteForm(props) {
    return (
        <div data-testid="note-list"
            style={{marginBottom: 30}}>
                {
                    props.notes.map((note, index) => (
                        <div data-testid={'test-' + index}
                            key={index}>
                            <h2 data-testid={'test-name-' + index}>
                                {note.name}
                            </h2>
                            <p data-testid={'test-description-' + index}>
                                {note.description}
                            </p>
                            <button 
                                data-testid={'test-button-' + index}
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