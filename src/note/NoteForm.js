function NoteForm(props) {
    return (
        <div>
            <input 
                data-testid="note-name-field"
                onChange={e => props.setFormDataCallback({ 
                    ...props.formData, 
                    'name': e.target.value}
                    )}
                placeholder="Note name"
                value={props.formData.name}/>
                
            <input data-testid="note-description-field" 
                placeholder="Note description"
                onChange={e => props.setFormDataCallback({ 
                    ...props.formData, 
                    'description': e.target.value}
                    )}
                value={props.formData.description}/>

            <button data-testid="note-form-submit"
                onClick={props.createNoteCallback}>
                Create Note
            </button>
        </div>
    );
  }
  
  export default NoteForm;